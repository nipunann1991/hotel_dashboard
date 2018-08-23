import { Component } from '@angular/core';
import { AuthGuard } from './auth.guard';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  isDashboard: boolean = false; 
   

  constructor(private authService: AuthGuard ) { 

  }

  ngOnInit() { 
  	this.isDashboard = this.authService.isDashboard();
  
  }


 

}
