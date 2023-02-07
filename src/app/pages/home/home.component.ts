import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Counter } from 'src/app/models/counter.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit{
  dataSubscription !: Subscription;
  counterSubscription !: Subscription;
  previousNum ?: number;
  queue !: number[];
  counters !: Counter[];

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataSubscription = this.dataService.getData().subscribe(queue => {this.queue = queue, console.log(this.queue, 'latest queue')})
    this.counterSubscription = this.dataService.getCounterData().subscribe(counters => {this.counters = counters})
  }

  ngOnDestroy() {
    if(this.dataSubscription && this.counterSubscription) {
      this.dataSubscription.unsubscribe
      this.counterSubscription.unsubscribe
      console.log('ngDestroy called')
    }
  }

  addToQueue() {
    if(this.previousNum != null) {
      this.queue.unshift(this.previousNum+1)
      console.log(this.queue, 'added to queue')
    }
    else {
      console.log('error')
    }
  }

  getQueueLength(): number {
    return this.queue.length;
  }

  getCurrentServingTicket() {
    return this.queue.at(this.getQueueLength()-1);
  }

  getLastIssuedTicket() {
    this.previousNum = this.queue.at(0);
    return this.previousNum;
  }
}

