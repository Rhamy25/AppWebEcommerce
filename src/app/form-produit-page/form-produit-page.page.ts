import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestServiceService } from '../request-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-form-produit-page',
  templateUrl: './form-produit-page.page.html',
  styleUrls: ['./form-produit-page.page.scss'],
})
export class FormProduitPagePage implements OnInit {
  constructor(
    private router: Router,
    private requestService: RequestServiceService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  navigate(name: string) {
    this.router.navigate([name]);
  }
  retourEnArriere() {
    this.navCtrl.pop();
  }

  post() {
    const data = {
      /* Vos données à envoyer */
    };

    this.requestService.postData(data).subscribe(
      (response) => {
        console.log('Réponse du serveur :', response);
        // Traitez la réponse du serveur ici
      },
      (error) => {
        console.error('Erreur lors de la requête POST :', error);
        // Gérez les erreurs ici
      }
    );
  }
}
