import { Component, inject, OnInit } from '@angular/core';
import { CoinmarketService } from '../../services/coinmarket/coinmarket.service';
import IResponseMealDb from 'src/app/interface/IResponseMealDb';
import IResponseMeals from 'src/app/interface/IResponseMeals';
import { map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-coinmarket',
  templateUrl: './coinmarket.component.html',
  styleUrls: ['./coinmarket.component.scss']
})
export class CoinmarketComponent implements OnInit {
  private coinmarketService = inject(CoinmarketService);

  String = String;
  ngOnInit(): void {
    console.log("richiesta api: ", this.coinmarketService.getData());
  }

  ResponseApiData$: Observable<any> = this.coinmarketService.getData().pipe(
    map( ({meals }) => meals)
    );

}

/*
// interceptor : e una classe che implemnta httpInterceptor
// prende il servizio di autenticazione
// gli diamo il token di autorizzaione
// clona la richiesta
//  con un parametro in piu headers : authorizzation
e alla fine ritorniamo next.handle() che e un clone della prima richiesta
*/
