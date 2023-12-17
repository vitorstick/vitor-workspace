import { Route } from '@angular/router';

enum RoutePath {
  HOME = 'home',
  RESUME = 'resume',
}

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RoutePath.HOME,
  },
  {
    path: RoutePath.HOME,
    loadChildren: () =>
      import('./components/home/home.routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: RoutePath.RESUME,
     loadChildren: () =>
       import('./components/resume/resume.routes').then(
         (m) => m.RESUME_ROUTES,
       ),
  },
];
