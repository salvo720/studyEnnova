import { ViewEncapsulation } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // encapsulation: ViewEncapsulation.None  // elimina del componente figlio
})
export class HeaderComponent implements OnInit{

  @Input() navItems!:Array<string>; // dopo una variablie ! :  indica una propieta obbligatoria quindi non dobbiamo inizializzarla

  // momento di inizializziaione del componente
  constructor(){
    console.log( "construttore ")
    console.log( "navItems : ",  this.navItems);
  }

  ngOnInit(): void {
    console.log( "OnInit ")
    console.log( "navItems : ",  this.navItems);
  }
}
