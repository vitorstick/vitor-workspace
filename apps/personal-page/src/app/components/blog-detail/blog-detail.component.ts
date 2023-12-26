import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from '../blog/api/blog.service';
import { BlogPostDetail } from '../blog/models/blog.model';

@Component({
  selector: 'vt-blog-detail',
  standalone: true,
  imports: [AsyncPipe],
  providers: [BlogService],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogDetailComponent {
  blogPostDetail$!: Observable<BlogPostDetail>;


  constructor(private blogService: BlogService, private route: ActivatedRoute ) {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.blogPostDetail$ = this.blogService.getPostById(+id);
    }
  }

}


