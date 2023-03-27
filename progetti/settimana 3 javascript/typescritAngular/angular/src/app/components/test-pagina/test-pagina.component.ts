import { Component } from '@angular/core';

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
