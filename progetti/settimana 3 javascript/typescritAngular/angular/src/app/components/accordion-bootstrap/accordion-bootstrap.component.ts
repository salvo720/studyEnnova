import { Component, Output, EventEmitter, Input } from '@angular/core';
import IAccordion from '../../interface/iaccordion';
import IEventAccordion from '../../interface/IEventAccordion';

@Component({
  selector: 'app-accordion-bootstrap',
  templateUrl: './accordion-bootstrap.component.html',
  styleUrls: ['./accordion-bootstrap.component.scss']
})


export class AccordionBootstrapComponent {
  @Input() accordionItem: IAccordion = { heading: '', content: '' };
  currentOpen: null | number = null;

  accordionItems: Array<IAccordion>;
  AccordionManager = [{ isOpen: false }, { isOpen: false }, { isOpen: false }];
  /*
    <!--  accordin group : e un componente che orchestra gli accrodion item
    al click sull'intestazione di un componente 'accordionItem' dovremo emettere un evento
    il componente padre dovra ascoltare gli eventi dei singoli elementi e capire cosa fa
    passiamo lo stato di aperto chiuso dal componente padre ai figli
    dobbiamo avere al massimo 1 elemento aperto per volta

    items:Array<{heading:string, content:string}> = [{heading:'HTML', content:''...''}];

  -->
  */


  constructor() {

    this.accordionItems = [
      { heading: 'HTML', content: 'HTML' },
      { heading: 'HEAD', content: 'HEAD' },
      { heading: 'BODY', content: 'BODY' },
    ];
  }

  // gestore eventi
  toggle(index: number) {
    console.log(index)
    const isTheOpenOne = index === this.currentOpen;
    this.currentOpen = isTheOpenOne ? null : index;
  }

}
