import { Injectable, WritableSignal, signal } from '@angular/core';
import { BlogPost } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogStoreService {

  blogPosts: WritableSignal<BlogPost[]> = signal([]);

  set(blogPosts: BlogPost[]) {
    this.blogPosts.set(blogPosts);
  }
}
