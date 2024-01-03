import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost, BlogPostDetail } from '../models/blog.model';

@Injectable()
export class BlogApiService {

  constructor(private http: HttpClient) {
  }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>('https://dev.to/api/articles/latest?username=vitorstick');
  }

  getPostById(id: number = 1704876): Observable<BlogPostDetail> {
    return this.http.get<BlogPostDetail>(`https://dev.to/api/articles/${id}`);
  }
}
