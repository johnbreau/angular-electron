import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxElectronModule} from 'ngx-electron';
import { DropdownModule } from 'angular-custom-dropdown';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,
    DropdownModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
