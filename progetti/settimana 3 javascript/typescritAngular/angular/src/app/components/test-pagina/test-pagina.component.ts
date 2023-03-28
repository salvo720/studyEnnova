import { AfterViewInit, Component, EventEmitter, HostListener, Input } from '@angular/core';
import IAccordion from '../../interface/iaccordion';
import IEventAccordion from '../../interface/IEventAccordion';

@Component({
  selector: 'app-test-pagina',
  templateUrl: './test-pagina.component.html',
  styleUrls: ['./test-pagina.component.scss']
})
export class TestPaginaComponent implements AfterViewInit {
  isModalOpen: boolean = false;
  objectMap;
  date;
  constructor() {
    console.log("construttore ")
    this.objectMap = new Map([
      ["apples", 500],
      ["bananas", 300],
      ["oranges", 200]
    ]);
    this.date = new Date();
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
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
}
