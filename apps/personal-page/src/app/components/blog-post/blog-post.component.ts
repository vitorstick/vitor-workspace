import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogPost } from '../blog/models/blog.model';

@Component({
  selector: 'vt-blog-post',
  standalone: true,
  templateUrl: './blog-post.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, RouterLink],
})
export class BlogPostComponent {
  @Input({required: true}) post!: BlogPost;

}
