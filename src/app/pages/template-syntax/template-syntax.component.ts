import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent  {

  image = {text: 'Texte alternatif', link: '/assets/images/catbis.webp'};

  task = {text : 'tâche à faire', isFinished: true};

  myClasse = 'todo';

  myStyle = {backgroundColor: 'teal', 'font-weight': 'bold'}
// On peut écrire le style ( en 2 mots ) en camel Case ou en tant que string

  color = 'rebeccapurple';

  size = 400;


  constructor() { }

  changeSize(val: number) {
    this.size += val;
    if(this.size <= 0) {
      this.size = 0
    }
  }


}
