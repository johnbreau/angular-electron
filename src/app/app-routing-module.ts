import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';

// Services
// import { AuthGuard } from '../../core/services/auth-guard.service';

export const routes: Routes = [
  {
    path: 'app',
    component: AppComponent,
  },
  {
    path: 'splash',
    component: SplashComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [],
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

