import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  headerRoutes: HeaderRoutes[] = [
    {
      label: 'Home',
      path: '/home',
    },
    {
      path: '/history',
      label: 'History',
    },
    {
      path: '/blog',
      label: 'Blog',
    },
  ]
}
