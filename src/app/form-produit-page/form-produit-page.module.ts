import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormProduitPagePageRoutingModule } from './form-produit-page-routing.module';

import { FormProduitPagePage } from './form-produit-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormProduitPagePageRoutingModule
  ],
  declarations: [FormProduitPagePage]
})
export class FormProduitPagePageModule {}
