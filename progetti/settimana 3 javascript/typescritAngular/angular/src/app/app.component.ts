import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import INewApi from './components/interface/inew-api';
import IArticle from './components/interface/iarticle';
import { BehaviorSubject, Subject, tap, switchMap, debounceTime, fromEvent, throttleTime, animationFrameScheduler, delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  navItems = ['home','ContatoreEArticoli']
  date = new Date();


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
}
