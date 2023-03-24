import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() item!:string; // dopo una variablie ! :  indica una propieta obbligatoria quindi non dobbiamo inizializzarla
}
