import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {

  count = 0;
  message2 = 'Message 2'

  constructor() {
    console.log('---Constructeur de count');
    this.sayHello();
  }

  increment() {
    this.count++;
    this.sayHello();
  }

  sayHello() {
    console.log('Hello')
  }

  displayMessage(msg: string) {
    alert(msg);
  }



}
