import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, from, map, mergeMap, tap, switchMap, concatMap, toArray, take, interval, of, filter, Subscription, catchError } from 'rxjs';
import IResponseHackerNews from 'src/app/interface/IResponseHackerNews';

@Injectable({
  providedIn: 'root'
})
// su angular i service isntanziati sono di tipo singleton , questo e uno dei motivi per cui
// al cambiamento dei dati su un componente cambiano pure sugli altri componenti

// se non usiamo un behaviorSubject e usiamo un tipo primitivo invece
// i dati non saranno aggiornati in tutti i componenti

// inoltre la reattivi su angular e garantita da rxjs , senza rxjs non esiste reattivita


/**
 * scrivere un service dentro la nostra applicazione che espone un counter$
 * e due metodi : increse() e decrese()
 *
 * usare i metodi in due componenti diversi tramite counterService.decrease()
 * e mostrare il counter aggiornato in entrambi in modo reattivo
*/
export class BlogService {
  private http = inject(HttpClient);
  hackerNewsApiData$: any
  ids$: any

  dato$ = new BehaviorSubject<number>(0);
  constructor() { }

  increase() {
    const oldvalue = this.dato$.getValue();
    this.dato$.next(oldvalue + 1)
  }

  decrease() {
    const oldvalue = this.dato$.getValue();
    this.dato$.next(oldvalue - 1)
  }

  reset() {
    this.dato$.next(0)
  }

  getHackerNewsData() : Observable<IResponseHackerNews[][]> {
    const urlIds = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
    return this.hackerNewsApiData$ = this.http.get<number[]>(urlIds).pipe(
      map((Arrayids: number[]) => Arrayids.slice(0, 10)),
      tap((data) => console.log(data)),
      // trasnformaiamo un singolo valore emesso in piu valori emessi
      // il from li emette facendo passare qualche secondo , cosi emeettera piu valori partendo da un array
      // switchMap((data: number[]) => from(data)),
      concatMap((data: number[]) => from(data)),
      tap((data) => console.log(data)),
      map((id: number) => {
        const url = ` https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
        return this.http.get<IResponseHackerNews[]>(url)
      }),
      concatMap((data) => data),
      catchError((error:Error) => { throw new Error("si e verificato un errore " + error.message )}),
      toArray(),
      tap((data) => console.log(data)),
    );

  }

  // il service effettua il return di un this.http.get
  getHackerNewsById(id: number) : Observable<IResponseHackerNews> {
    return this.getHackerNewsData().pipe(

      tap((data: any) => console.log("filter : ", data, "id : ", id)),
      map((data: IResponseHackerNews[]) => data.filter(element => element.id == id)),
      tap((data: any) => console.log("filter dopo  : ", data)),
    );
  }

}
