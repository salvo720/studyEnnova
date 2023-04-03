import { AnimationBuilder, AnimationMetadata, AnimationPlayer, animate, style, transition } from '@angular/animations';
import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnInit, ViewChild, inject } from '@angular/core';

@Directive({
  selector: '[appAccordion]',

})
export class AccordionDirective implements OnInit, AfterViewInit {
  private element = inject(ElementRef<HTMLCollection>);
  initialHeight: number | null = null; // inziamo semper da null per capire se un elemento e presente o meno

  // su una direttiva non usiamo @viewchild perche se l'elemnto e duplicato javascript
  // non funzionerre piu su tutti gli elementi



  constructor() { }
  ngOnInit(): void {
    const element = this.element.nativeElement;
    this.initialHeight = Math.trunc(element.getBoundingClientRect().height);
    element.style.overflow = 'hidden';
    element.style.transition = 'max-height .4s ease';
    element.style.willChange = 'max-height';

    // element.style.maxHieght = 'hidden';
    // console.log({"element accordion":element})

  }
  ngAfterViewInit(): void {
  }

  isOpen = true;

  @HostListener('click', ['$event.target'])
  prepareDirective(target: HTMLElement) {
    // chiudi
    const isTargetButton = target.tagName.toLowerCase();
    const element = this.element.nativeElement;
    if (isTargetButton !== 'button' || typeof this.initialHeight === 'object') return

    const child: HTMLElement[] = Array.from(element.children);
    const button: HTMLElement = child[0];
    if (button.tagName.toLowerCase() !== "button" || !(button instanceof HTMLButtonElement) || target !== button) return;
    const buttonHeight = button.getBoundingClientRect().height;
    element.style.height = buttonHeight + 'px';
    console.log({ "element initiaHeight": this.initialHeight, "child accordion: ": child, "event": event.target })


    const newMaxHeight = this.isOpen ? buttonHeight : this.initialHeight;
    element.style.height = `${newMaxHeight}px`;
    this.isOpen = !this.isOpen;
  }

}


/*
creare una direttiva appAccordion che permette di aprire e chiudere un elemento al clic;
- la direttiva funziona solo all'interno del mio elemento ho un <button>
- al caricamento devo prendere l'altezza del mio elemento e salvarla;
- al click sul button voglio poter chiudere l'elemento lascaiando visibile solo il button
- il button deve semore il oìprimo elemento all'interno dell'htmo
tips :
- usare  "overflow:hidden;"
- per l'animazione di ciusura 2trasition con max heoght
- calcolo l'altezza naturale dell'elemento all'inzio . poi la salva ;
- Devo animare portando max-heignth : Altezza_Iniziale -> altezza_buttton
*/
