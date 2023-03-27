import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() item!: string; // dopo una variablie ! :  indica una propieta obbligatoria quindi non dobbiamo inizializzarla
  // output ci permette di lanciare degli eventi dal componente figlio al componente padre

  @Output() clicked = new EventEmitter<any>();
  // momento di inizializziaione del componente
  ngOnInit() {
    setTimeout(() => {
      this.clicked.emit('Sono un valore emesso dopo 2 secondi ');
    }, 2_000);
  }


  @Output() clicknav = new EventEmitter();

  clickNavHandler () {
    this.clicknav.emit("Sono un valore emesso dalla nav ")
  }

}
