import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogApiService } from '../../api/blog-api.service';
import { BlogPostDetail } from '../../models/blog.model';

@Component({
  selector: 'vt-blog-detail',
  standalone: true,
  imports: [AsyncPipe],
  providers: [BlogApiService],
  templateUrl: './blog-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogDetailComponent {
  blogPostDetail$!: Observable<BlogPostDetail>;


  constructor(private blogService: BlogApiService, private route: ActivatedRoute ) {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.blogPostDetail$ = this.blogService.getPostById(+id);
    }
  }

}


