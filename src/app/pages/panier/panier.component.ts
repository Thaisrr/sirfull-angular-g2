import { PanierService } from './../../utils/services/panier.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent  {
  panier: string[] = [];

  constructor(private panierService: PanierService ) {

    console.log(this.panierService.message);
    this.panier = panierService.panier;

   }

}
