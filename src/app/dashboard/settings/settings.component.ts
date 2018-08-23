import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

	ckeditorContent: string = '<p>Some Text Here</p>';
	ckeConfig: any;

  constructor(private router: Router) { }

  ngOnInit() {

  	$('document').ready(function(){
      	$('.menu .item').tab();
  	});

  	 this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'justify,link,basicstyles',
      forcePasteAsPlainText: true,

    };
  }


  goToLink(link: string): void {
    this.router.navigateByUrl(link);
  }

}
