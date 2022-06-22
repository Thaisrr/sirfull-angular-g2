import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-logic',
  templateUrl: './template-logic.component.html',
  styleUrls: ['./template-logic.component.css']
})
export class TemplateLogicComponent {

  isLogged = false;

  @ViewChild( 'title' ) titre? : ElementRef;

  role: 'USER' | 'ADMIN' | 'SUPERHERO' = 'USER';

  afficherCompteur = false;

  livres = ['Les Hauts de Hurlevent', 'Frankenstein', 'Le Horla', 'Dracula']

  constructor() { }

  login() {
    this.isLogged = !this.isLogged
  }

  changeTitle() {
    if(this.titre) {
      this.titre.nativeElement.textContent = 'Toujours pas !!!!!!';
    }
  }

  displayCounter() {
    this.afficherCompteur = !this.afficherCompteur;
  }

}

