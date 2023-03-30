import { Component, Inject, Injectable, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, concatMap, filter, map, switchMap, tap } from 'rxjs';
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
  // snapshot e una foto di quel momento cosi e statico usando gli osservable diventa reattivo come ad esempio params
  // cioe se id cambia con paramrs la catena viene rieseguita , con snapshot questo non avviene
  // id: number = this.route.snapshot.params['slug'];
  id: number = 0;
  articleBlog$: Observable<IResponseHackerNews>  =  this.route.params.pipe(
    tap((data) => console.log("dataId : ", data)),
    // ritorna un observable di tipo iHackerNews
    // usiamo il concat map per emetterre un altro observable
    //  dopo aver preso l'id del nostro elemento
    filter(Boolean),
    switchMap((params) => this.blogService.getHackerNewsById(params['id'])),
    tap((data) => console.log("data dopo concatMap: ", data)),

  );

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
    console.log('articleBlog : ', this.articleBlog$)
    // this.blogService.getDataHackerNewsData

  }







}
