import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService)
  public count$ = this.blogService.dato$;
  countNormale: number = 0;
  observableResponse$ : any ;

  articles$ = this.route.data.pipe(
    map((data: any) => data["articles"])
  )
  ngOnInit(): void {
    console.log(this.route.snapshot.data)
    this.getDataHackerNews();
  }

  increseDato() {
    this.blogService.increase();
    this.countNormale +=1;
  }

  decreaseDato() {
    this.blogService.decrease();
  }

  getDataHackerNews(){
    this.observableResponse$ = this.blogService.getHackerNewsData();
    console.log(" this.observableResponse$" , this.observableResponse$ );
  }

}
