import { Component, Inject, Injectable, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import IResponseHackerNews from '../../interface/IResponseHackerNews';
import { BlogService } from '../../services/blog/blog.service';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  id: number = this.route.snapshot.params['slug'];
  articleBlog$ : any;
  article$ = this.route.data.pipe(
    map((data: any) => data["article"])
  );
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log('route : ', this.route)
    // snapshot non e reattivo quindi se i dati dovessero cambiare lo snapshot non viene aggiornato
    console.log('route.snapshot : ', this.route.snapshot)
    const snapshot = this.route.snapshot;
    const initialData = snapshot.data;
    console.log('initialData : ', initialData)
    // this.blogService.getDataHackerNewsData
    this.getArticle();
  }

  getArticle(){
    this.articleBlog$ = this.blogService.getHackerNewsById(this.id);
   console.log(this.blogService.getHackerNewsById(this.id));
  }






}
