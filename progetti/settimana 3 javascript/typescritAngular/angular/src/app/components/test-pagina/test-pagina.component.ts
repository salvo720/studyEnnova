import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, ViewChild } from '@angular/core';
import IAccordion from '../../interface/iaccordion';
import IEventAccordion from '../../interface/IEventAccordion';
import Swiper from 'tiny-swiper'
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-test-pagina',
  templateUrl: './test-pagina.component.html',
  styleUrls: ['./test-pagina.component.scss']
})
export class TestPaginaComponent {
  isModalOpen: boolean = false;
  objectMap = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  date = new Date();


  constructor() {
    console.log("construttore ")
  }

  modalHandler($event?: Event | undefined) {
    // mostra o nasconde la modale
    this.isModalOpen = !this.isModalOpen;
    console.log("la mdoale e stata chiusa da  :", $event || 'shadow')
    // if ($event) console.log("accettaPremuto event :", $event)
  }
  @HostListener('document:click', ['$event']) onDocumentClick(event: MouseEvent) {
    const modal = document.querySelector('.modal')!;
    // nasconde l'elemento quando si clicca sulla shadow
    if (event.target == modal) {
      this.isModalOpen = false;
    }
  }

  // storage del browser :
  // localstorage :  salva delle stringhe secondo la notazione chiave => valore


  // git flow
  // Docs : https://dreams.news/articles/git-flow-cos-e-e-come-funziona
  // git status
  // git pull origin // aggiorni respetto ad origin
  // git checkot -b feat/... // mi sposto su un nuovo branch
  // git commit -m "commit"
  // git push origin brach // faccio il push su branch
  // pull request seguendo il link di github
  // git chechout main
  // ricomincio da capo

}
