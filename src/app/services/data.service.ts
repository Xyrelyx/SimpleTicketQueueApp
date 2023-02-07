import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs'
import { Counter } from '../models/counter.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  //data initialization
  private dataSource: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([100]);
  private counterData: BehaviorSubject<Counter[]> = new BehaviorSubject<Counter[]>
  ([{counterNo: 1, currentNumber: 0, isOffline: true},
    {counterNo: 2, currentNumber: 0, isOffline: true},
    {counterNo: 3, currentNumber: 0, isOffline: true},
    {counterNo: 4, currentNumber: 0, isOffline: true}]);

  data: Observable<number[]> = this.dataSource.asObservable();
  data2: Observable<Counter[]> = this.counterData.asObservable();

  constructor() { 

  } 
  
  getData() {
    return this.data;
  }

  getCounterData() {
    return this.data2;
  }
}
