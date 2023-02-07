import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Counter } from 'src/app/models/counter.model';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
})

export class ManagementComponent implements OnInit {
  dataSubscription !: Subscription;
  counterSubscription !: Subscription;
  currentQueue !: number[];
  counters !: Counter[];

  constructor(private snackBar: MatSnackBar, private dataService: DataService) {

  }

  ngOnInit(): void {
    this.counterSubscription = this.dataService.getCounterData().subscribe(counters => {this.counters = counters, console.log(this.counters, 'counters')})
    this.dataSubscription = this.dataService.data.subscribe(queue => {this.currentQueue = queue, console.log(queue, 'received latest queue')})
  }

  ngOnDestroy() {
    if(this.dataSubscription && this.counterSubscription) {
      this.dataSubscription.unsubscribe
      this.counterSubscription.unsubscribe
      console.log('ngDestroy called')
    }
  }

  completeCurrentQueue(i: number) {
    if(this.counters[i].currentNumber === 0) {
      this.snackBar.open('No tickets currently', 'OK', {duration: 3000})
    }
    else {
      this.counters[i].currentNumber = 0;
      console.log(this.currentQueue, 'Counter ' + this.counters[i].counterNo + ' completed a ticket')
    }
  }

  nextQueue(i: number) {
    if(this.currentQueue.length === 0) {
      this.snackBar.open('Queue is empty', 'OK', {duration: 3000})
    }
    else {
      this.counters[i].currentNumber = this.currentQueue.at(this.currentQueue.length-1)
      console.log('Counter ' + this.counters[i].counterNo + ' is now serving ' + this.counters[i].currentNumber);
      this.currentQueue.pop();
    }
  }

  toggleCounter(i: number) {
    if(this.counters[i].currentNumber === 0) {
      this.counters[i].isOffline = !this.counters[i].isOffline
    }

    if(this.counters[i].isOffline) {
      this.snackBar.open('Counter ' + this.counters[i].counterNo + ' is offline', 'OK', {duration: 3000})
    }
    else {
      this.snackBar.open('Counter ' + this.counters[i].counterNo + ' is online', 'OK', {duration: 3000})
    }
  }
}
