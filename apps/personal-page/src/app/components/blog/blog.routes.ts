import { Route } from "@angular/router";
import { BlogDetailComponent } from "../blog-detail/blog-detail.component";
import { BlogComponent } from "./blog.component";

export const BLOG_ROUTES: Route[] = [
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: ':id',
    component: BlogDetailComponent,
  }
]
