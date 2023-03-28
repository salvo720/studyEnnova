import { Component, Inject, Injectable, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {
  private route = inject( ActivatedRoute);
  article$ = this.route.data.pipe(
    map((data:any) =>  data["article"] )
  );
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log('route : ', this.route)
    // snapshot non e reattivo quindi se i dati dovessero cambiare lo snapshot non viene aggiornato
    console.log('route.snapshot : ', this.route.snapshot)
    const snapshot = this.route.snapshot;
    const initialData = snapshot.data;
    console.log('initialData : ', initialData)

  }
}
