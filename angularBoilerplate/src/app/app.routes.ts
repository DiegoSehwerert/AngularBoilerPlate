import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [];

const appRoutes: Routes = [
  { path: '', component: HeaderComponent },
  { path: '', component: MainContentComponent },
  { path: '', component: FooterComponent }
];