import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
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
