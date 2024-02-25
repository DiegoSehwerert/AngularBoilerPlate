import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CommonModule } from '@angular/common';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(CommonModule)],
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

