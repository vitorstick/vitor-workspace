import { AsyncPipe } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BlogApiService } from '../../api/blog-api.service';
import { BlogStoreService } from '../../services/blog-store.service';
import { BlogPostComponent } from '../blog-post/blog-post.component';

@Component({
  selector: 'vt-blog',
  standalone: true,
  providers: [BlogApiService, BlogStoreService],
  templateUrl: './blog.component.html',
  imports: [AsyncPipe, BlogPostComponent],
})
export class BlogComponent {
  blogStoreService = inject(BlogStoreService);
  blogApiService = inject(BlogApiService);

  blogPosts = toSignal(this.blogApiService.getBlogPosts());

  constructor() {
    effect(
      () => {
        if (this.blogPosts()?.length) {
          this.blogStoreService.set(this.blogPosts() ?? []);
        }
      },
      {
        allowSignalWrites: true,
      }
    );
  }
}
