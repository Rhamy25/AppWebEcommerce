import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  private apiUrl = 'http://api.bitebitego.com/';

  constructor(private http: HttpClient) {}

  getAllData(data: any): Observable<any> {
    return this.http.get(this.apiUrl+"afficher/produits/code/e40a6ad0-6ebe-46e2-8cc7-4b25b5217371", data);
  }

  getData(id:any,data: any): Observable<any> {
    console.log(id)
    return this.http.get(this.apiUrl+"afficher/produit/"+id+"/code/e40a6ad0-6ebe-46e2-8cc7-4b25b5217371", data);
  }

  postData(data: any): Observable<any> {
    return this.http.post(this.apiUrl+"ceerproduit", data);
  }

}
