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
  blogService = inject(BlogService)

  articles$ = this.route.data.pipe(
    map((data:any)=> data["articles"])
  )
  ngOnInit(): void {
    console.log(this.route.snapshot.data)
  }

  updateDato(){
    const oldvalue = this.blogService.dato$.getValue();
    this.blogService.dato$.next(oldvalue + 1)
  }

}
