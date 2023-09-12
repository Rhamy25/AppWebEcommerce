import { Component } from '@angular/core';
import { AjoutProduit } from '../ajout-produit/ajout-produit.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  component = AjoutProduit

}
