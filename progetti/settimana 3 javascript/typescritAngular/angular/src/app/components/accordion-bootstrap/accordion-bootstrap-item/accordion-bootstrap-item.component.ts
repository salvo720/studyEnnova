import { Component, EventEmitter, Input, Output } from '@angular/core';
import IAccordion from '../../interface/iaccordion';

@Component({
  selector: 'app-accordion-bootstrap-item',
  templateUrl: './accordion-bootstrap-item.component.html',
  styleUrls: ['./accordion-bootstrap-item.component.scss']
})
export class AccordionBootstrapItemComponent {

  @Input() accordionItem :IAccordion = {heading: '', content: '' };
  @Input() i :number = 0;
  @Input() isOpen :boolean = false;

  @Output() headerAccordion = new EventEmitter();


  constructor(){

  this.isOpen= false;
}

headerAccordionHandler ( accrodionId : number ){
  console.log("e stato emesso un evento ", accrodionId );
  console.log("accordionItem",this.accordionItem)
  // accrodion.isOpen=true;
}

}
