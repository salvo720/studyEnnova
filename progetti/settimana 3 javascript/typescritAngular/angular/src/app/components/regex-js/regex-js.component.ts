import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-regex-js',
  templateUrl: './regex-js.component.html',
  styleUrls: ['./regex-js.component.scss']
})
export class RegexJsComponent implements OnInit {
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    // build form

    // regex
    this.regexJs();
  }

  buildForm(){
    // costruzione form con form builder
  }

  regexJs(){
    // Docs : video yt regex  (https://www.youtube.com/watch?v=3P5wKnrSwqw)


  }


}
