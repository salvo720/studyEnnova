import { AfterViewChecked, Directive, ElementRef, HostListener, Input, OnInit, inject } from '@angular/core';
import { style } from '@angular/animations';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, AfterViewChecked {
  element = inject(ElementRef<HTMLElement>);
  initialColor: Record<'color' | 'background', string>
  @Input() appHighlight: string = "blue";
  @Input() appBackgroundColor: string = "transparent";
  constructor() {
    // console.log("costruttore element: ", this.element)
    this.initialColor = this.element.nativeElement.style.background;
  }
  ngAfterViewChecked(): void {
    // console.log(this.element , this.appHighlight)
    // console.log(this.element, this.appHighlight, this.appBackgroundColor)
    // this.element.nativeElement.style.color = this.appHighlight;
    // this.element.nativeElement.style.background = this.appBackgroundColor;

  }

  ngOnInit(): void {
    console.log("ngOnInit element: ", this.element)
    console.log("ngOnInit appHighlight: ", this.appHighlight)
    console.log("ngOnInit appBackgroundColor: ", this.appBackgroundColor)
    this.prepareSlider();

  }

  prepareSlider() {
    const el = this.element.nativeElement;
    if (!el) return;

    const children: HTMLCollection = el.children;
    setTimeout(() => {
      console.log("children: ", { children })
      Array.from(children)?.forEach(child => {
        console.log("child: ", { child })
        child.outerHTML = `<div class="swiper-slide">${child.outerHTML}</div>`;
      });
    }, 0)

  }
  @HostListener('mouseleave', ['$event']) onHover($event: UIEvent) {
    /*
     console.log("color: ", this.color  )
     */
    this.element.nativeElement.style.color = this.appHighlight;
    this.element.nativeElement.style.background = this.appBackgroundColor;

  }

  @HostListener('mouseenter', ['$event']) onLeave($event: UIEvent) {
    /*
     console.log("color: ", this.color  )
     */
    const { color, background } = this.initialColor;
    this.element.nativeElement.style.color = color;
    this.element.nativeElement.style.background = background;
  }


  // quando andiamo in hover su un elemento , sotto accessibilita ci sta contrast che e quanto e accessibile quella scritta
  // i numeri fondamenti dell'accessibilita sono sopra di 4.5 e 7 che e il minimo per l'accessibilita


}
