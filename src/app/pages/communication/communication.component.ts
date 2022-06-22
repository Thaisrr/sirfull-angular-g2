import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent {
  message = 'Bonjour le monde !';
  count = 10;

  count2 = 100;

  constructor() { }

  increment() {
    if(this.count || this.count === 0) {
      this.count++;
    }
  }

  updateValue(new_value: number) {
    this.count = new_value;
  }

  increment2() {
    if(this.count2 || this.count2 === 0) {
      this.count2++;
    }
  }

}
