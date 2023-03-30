import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import Swiper from 'tiny-swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {

  // Selezioniamo un elemento dall'html del nostro componente,
  // prima della variabile aggiungiamo il decoratore @ViewChild('nomeselettore')
  // nomeselettore e un selettore che e formato da : #+nomeselettore
  @ViewChild('swiperContainer')
  // ElementRef indica che facciamo riferimento ad un element , questo ritorna un oggetto e l'elemento sara dentro la chiave nativeElement
  // HTMLElement : e il tipo di elemento a cui facciamo riferimento
  swieprContainer: ElementRef<HTMLElement>;
  ngAfterViewInit(): void {
    const swiper = new Swiper(this.swieprContainer.nativeElement);
    Swiper.use([]);
    console.log("swiper", swiper)
    console.log("swiper", this.swieprContainer)
    // console.log("swiper" ,     this.swieprContainer.nativeElement    )
    console.log("swiper", this.swieprContainer.nativeElement)
  }

}
