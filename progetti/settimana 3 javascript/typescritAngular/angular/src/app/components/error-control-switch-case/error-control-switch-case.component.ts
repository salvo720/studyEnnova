import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-control-switch-case',
  templateUrl: './error-control-switch-case.component.html',
  styleUrls: ['./error-control-switch-case.component.scss']
})
export class ErrorControlSwitchCaseComponent {
  @Input() control: FormControl
  @Input() controlName: string
  Object = Object
}


