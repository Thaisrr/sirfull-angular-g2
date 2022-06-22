import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  message = 'Coucou de panier service';
  panier: string[] = [];

  addToPanier(item: string) {
    this.panier.push(item);
  }

  removeFromPanier(item: string) {
    const index = this.panier.indexOf(item);
    if(index >= 0) {
      this.panier.splice(index,1);
    }
  }


}
