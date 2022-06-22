import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent {

  // Attention, il faut importer input en haut du composant
  @Input() text: string = 'Rien à voir ici';
  @Input() id?: number; // number ou undefined
  @Input() truc : number | undefined;
  @Input() machin!: string; // a éviter
/*
On peut mettre autant d'input qu'on le souhaite,
On peut passer n'importe quel type d'input  :
primitif, tableau, des objets, des types, .....
*/

  @Input() counter?: number;
  @Output() increment_emitter = new EventEmitter();

  @Output() add_ten_emitter = new EventEmitter<number>();


  constructor() { }

  increment() {
    if(this.counter || this.counter === 0) {
      this.increment_emitter.emit();
    }
  }

  addTen() {
    if(this.counter || this.counter === 0) {
      this.counter += 10;
      this.add_ten_emitter.emit(this.counter);
    }
  }


}
