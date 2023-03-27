import { AfterViewInit, Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import INewApi from './components/interface/inew-api';
import IArticle from './components/interface/iarticle';
import { BehaviorSubject, Subject, tap, switchMap, debounceTime, fromEvent, throttleTime, animationFrameScheduler, delay } from 'rxjs';

// per eseguire i test vai sotto la cartella del progetti ed esegui il comando :  npm run test
/**
 * Docs :
 * cypress per effettuare i test libreria e2e link : https://www.cypress.io/
 * rxjs nel dettaglio corso di Michele Stieven : https://accademia.dev/corso/rxjs-masterclass/
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnChanges , AfterViewInit {
  title = 'angular app is running!';



  // animazione che segue il muose
  // let div = document.querySelector('.effettosfocato');

  /*
  seguiIlMouse() {
    fromEvent(document, 'mouseover').pipe(
      delay(250),
      throttleTime(0, animationFrameScheduler),
      map((event: Event) => { x: event.clientX, y : event.clientY })
    ).subscribe(({ x, y }) => {

    }

    )
  }
  */

  // Subject : e uno speciale observable di cui possiamo andare a modificare i valori
  // che emette di volta in volta usando il metodo next

  // Subject vs oBservable : puoi iscriverti nel Subject anche se non ha ancora emesso un valore e quando verra emesso un valore
  // Behavioursubject :invece ha bisogno sempre di unn valore inziale , inoltre il flusso con chi si iscrive e continuo ( ovverro prosgue con l'ultimo valore emesso e non ritramsmette tutti i dati )
  //  replaySubject : effettua il replay dei valori specificati

  // quando andiamo ad effetuare il complete tutte le sottoiscrizioni di quella catena vengono chiuse

  constructor() {
    console.log(10_000);
    const currenLocate = globalThis.navigator.language; // gloabThis eqivale al window ed avviene quando viene eseguito javascript lato ser ver per collegare node al windwo s
    console.log("currenLocate : ", { currenLocate })
    const intl = new Intl.DateTimeFormat(currenLocate).format();
    const intl2 = new Intl.DateTimeFormat('en').format();

    console.log({ [currenLocate]: intl, 'en': intl2 })

    /*

  - Primo parametro un valore che può essere string|number
  -  prendiamo come 2° parametro possibile un "method" che può essere:
    "date"|"number" ed in base al valore passato da template formattiamo la data o il numero usando Intl
    - se non viene passato un secondo parametro di default  viene
    preso per buono che vogliamo fare una formattazione di numero
  - Prendiamo un ulteriore parametro che passa i nostri dati dentro le opzioni del metodo di data/numero (...)

    */
  }

  // viene lanciato appena viene crato il componente
  ngOnInit(): void {
    console.log('Method not implemented.');
  }
  // viene eseguito quando le props cambiano
  ngOnChanges(changes : SimpleChanges): void {
    console.log('Method not implemented.' , changes);
  }
  // viene usato per accedere agli elementi del Dom
  ngAfterViewInit(): void {
    console.log('Method not implemented.');

  }

}
