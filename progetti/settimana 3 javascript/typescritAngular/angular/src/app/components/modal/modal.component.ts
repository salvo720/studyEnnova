import { style, transition, trigger , animate } from '@angular/animations';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0 , scale:'0'}),
        animate('1000ms ease-in-out', style({ opacity: 1 , scale : '1'})),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: "translateX(0)" }),
        animate('1000ms ease-in-out', style({ opacity: 0 ,  transform: "translateX(-100%)"}))
      ])
    ]),
  ],
})
export class ModalComponent {
  // Input spiegazione uso
  // gli input vengono definiti dalgi elementi child e e nell'html del componente padre vengono passati
  @Input() isOpen: boolean = false;

  // Output spiegazione uso
  // gli output emettono un evento al metodo emit() richiamato al click dall'Html del propio componente , esempio (click)=openModal.emit()
  // e poi devono ascoltare l'evento nel componente padre e da li richiamare un afunzione del componente padre   (openModal)="funzione()"
  @Output() openModal = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  @Output() closeModalBottoneAccetta = new EventEmitter();
}
