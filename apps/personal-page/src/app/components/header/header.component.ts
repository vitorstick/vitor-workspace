import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type HeaderRoutes = {
  path: string,
  label: string;
}

@Component({
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  selector: 'vt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headerRoutes: HeaderRoutes[] = [
    {
      label: 'home',
      path: '/home',
    },
    {
      path: '/resume',
      label: 'resume',
    },
    {
      path: '/blog',
      label: 'blog',
    },
    {
      path: '/contact',
      label: 'contact',
    }
  ]
}
