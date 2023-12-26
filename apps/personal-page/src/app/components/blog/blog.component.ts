import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { BlogPostComponent } from '../blog-post/blog-post.component';
import { BlogService } from './api/blog.service';

@Component({
  selector: 'vt-blog',
  standalone: true,
  providers: [BlogService],
  templateUrl: './blog.component.html',
  imports: [AsyncPipe, BlogPostComponent],
})
export class BlogComponent {

  blogPosts$ = this.blogService.getBlogPosts();

  constructor(private blogService: BlogService) { }

}
