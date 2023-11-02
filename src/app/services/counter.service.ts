import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  countProduct:number = 0;
  countPrice:number = 0;
  constructor() { }
}
