import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CustomFormsModule } from 'ngx-custom-validators'; 
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { CKEditorModule } from 'ng2-ckeditor';

import { AppRoutes } from  "./app.routes";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './auth.guard';
import { AnonymousGuard } from './auth.anonymusguard'; 
import { HeaderComponent } from './header/header.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { AddHotelComponent } from './dashboard/hotel/add-hotel/add-hotel.component'; 
//import { RippleDirective } from 'angular-ripple-effect/ripple.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent, 
    HeaderComponent,
    NavigationMenuComponent,
    SettingsComponent,
    AddHotelComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes, { useHash: true }), FormsModule, ReactiveFormsModule,  [CKEditorModule], CustomFormsModule,
    BrowserModule
  ],
  exports: [ RouterModule ], 
  providers: [AuthGuard, AnonymousGuard,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
