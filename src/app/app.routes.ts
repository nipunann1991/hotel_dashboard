import { Injectable } from '@angular/core';
import { Routes, CanActivate} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './dashboard/settings/settings.component'; 
import { AddHotelComponent } from './dashboard/hotel/add-hotel/add-hotel.component'; 

import { AuthGuard } from './auth.guard'; 
import { AnonymousGuard } from './auth.anonymusguard'; 

export const AppRoutes: Routes = [ 
	
	{ path: '', 
    	component: LoginComponent,  
      	canActivate: [AnonymousGuard]

  	},

  	{ path: 'login', 
    	component: LoginComponent,   
      	canActivate: [AnonymousGuard]

  	},

  	{ 	
  		path: 'dashboard', 
    	component: DashboardComponent,
      	canActivate: [AuthGuard]

  	},

    {   
      path: 'hotel/add-hotel', 
      component: AddHotelComponent,
        canActivate: [AuthGuard]

    },

  	{ 	
  		path: 'settings', 
    	component: SettingsComponent,
      	canActivate: [AuthGuard]

  	},

];