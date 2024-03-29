import { ViewEncapsulation } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // encapsulation: ViewEncapsulation.None  // elimina del componente figlio
})
export class HeaderComponent implements OnInit {
  objectMap;
  blogService = inject(BlogService)
  // il decorate input per passare una variabile al componente figlio
  @Input() navItems!: Array<string>; // dopo una variablie ! :  indica una propieta obbligatoria quindi non dobbiamo inizializzarla

  @Output() clicknav = new EventEmitter();

  countNormale : number = 0;

  constructor() {
    console.log("construttore ")
    console.log("navItems : ", this.navItems);
    this.objectMap = new Map([
      ["apples", 500],
      ["bananas", 300],
      ["oranges", 200]
    ]);

  }

  ngOnInit(): void {
    console.log("OnInit ")
    console.log("navItems : ", this.navItems);

  }

  handleClickedOnNav($event: Event) {
    console.log($event)
  }


  clickNavHandler() {
    this.clicknav.emit("Sono un valore emesso dalla nav ")
  }

  reset() {
    this.blogService.reset()
  }

}
