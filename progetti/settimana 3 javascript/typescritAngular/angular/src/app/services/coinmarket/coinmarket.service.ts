import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
// import { environment } from 'src/app/environments/environment';
import IResponseMealDb from 'src/app/interface/IResponseMealDb';
import IResponseMeals from 'src/app/interface/IResponseMeals';

@Injectable({
  providedIn: 'root'
})
export class CoinmarketService {
  private http = inject(HttpClient)
  // non pushare le tue chiavi dentro il repository ma
  // mettili dentro il file enviroments e poi rimuovilo dai file di git aggiunendo la cartella enviroments
  // sotto il file .gitignore

  url = 'http://www.themealdb.com/api/json/v1/1/search.php?f=a';
  constructor() {

  }

  getData() {
    return this.http.get<IResponseMeals>(this.url);
  }
}
