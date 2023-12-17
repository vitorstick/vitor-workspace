import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes,
      withPreloading(PreloadAllModules),
      withDebugTracing(),
    )],
};
