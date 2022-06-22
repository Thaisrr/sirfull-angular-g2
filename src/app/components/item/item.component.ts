import { PanierService } from './../../utils/services/panier.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {

  @Input() text?: string;

  constructor(private panierService: PanierService) {}

  add() {
    if(this.text) {
      this.panierService.addToPanier(this.text);
    }
  }

}
