import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withHashLocation, withPreloading } from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(appRoutes,
        withPreloading(PreloadAllModules),
        withHashLocation(),
      ),
      provideHttpClient(withFetch())
    ],
};


