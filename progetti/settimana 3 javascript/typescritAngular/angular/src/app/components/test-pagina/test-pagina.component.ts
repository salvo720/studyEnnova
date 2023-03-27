import { Component, EventEmitter } from '@angular/core';
import IAccordion from '../interface/iaccordion';
import IEventAccordion from '../interface/IEventAccordion';

@Component({
  selector: 'app-test-pagina',
  templateUrl: './test-pagina.component.html',
  styleUrls: ['./test-pagina.component.scss']
})
export class TestPaginaComponent {
  objectMap ;
  date;
  constructor(){
    console.log( "construttore ")
    this.objectMap =  new Map([
      ["apples", 500],
      ["bananas", 300],
      ["oranges", 200]
    ]);
    this.date = new Date();
  }
}
