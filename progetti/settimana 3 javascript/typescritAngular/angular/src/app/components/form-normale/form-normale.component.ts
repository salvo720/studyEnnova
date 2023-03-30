import { Component } from '@angular/core';

@Component({
  selector: 'app-form-normale',
  templateUrl: './form-normale.component.html',
  styleUrls: ['./form-normale.component.scss']
})
export class FormNormaleComponent {
  model = {
    favoriteColor: '',
    name: '',
    surname: '',
  }
}
