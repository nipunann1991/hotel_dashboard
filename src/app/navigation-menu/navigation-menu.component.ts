import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  navLinks: any = [
    {
      id: 0,
      label: 'Home',
      url: '/dashboard',
      icon: 'icon-home'
      
    },
    {
      id: 1,
      label: 'Hotel',
      url: '/',
      icon: 'icon-big-hotel',
      sub_menu: [{
        sub_id: 11,
        sub_url: '/hotel/add-hotel',
        sub_label: 'Add Hotel'
      },{
        sub_id: 12,
        sub_url: '/',
        sub_label: 'Edit Hotel'
      },{
        sub_id: 13,
        sub_url: '/',
        sub_label: 'View Hotel Profile'
      }]
    },
    {
      id: 2,
      label: 'Rooms',
      url: '/',
      icon: 'icon-bed',
      sub_menu: [{
        sub_id: 11,
        sub_url: '/',
        sub_label: 'Add Rooms'
      },{
        sub_id: 12,
        sub_url: '/',
        sub_label: 'Edit Rooms'
      },{
        sub_id: 13,
        sub_url: '/',
        sub_label: 'View Rooms'
      }]
    },
    {
      id: 3,
      label: 'Settings',
      url: '/settings',
      icon: 'icon-settings'
    }

    
  ];

  subLinks: any;
  sub_menu_title: any;


  constructor() { }

  ngOnInit() {



  	$('ul.menu').on('click', 'li',function(){

      let timer = 0;

        if (!$(this).hasClass('sub active')) {
          
          $('.app-content-area').removeClass('app-open');
          $('ul.menu li').removeClass('active'); 
          $(this).addClass('active'); 

          $('.app-sub-menu').removeClass('app-open');
       
          if ($(this).hasClass('sub')) { 
            setTimeout(function(){ 
              $('.app-sub-menu').addClass('app-open');
            }, timer);

          }   
 
        }else{
          $('ul.menu li').removeClass('active'); 
          $('.app-sub-menu').removeClass('app-open'); 

        }



  	});

    $('.app-content-area').click(function(){
      $('.app-sub-menu').removeClass('app-open');   

    });

    $('.app-sub-menu').on('click', 'li',function(){
      $('.app-sub-menu').removeClass('app-open');    
    });

  }


  toggleMenu(event, i){

    this.sub_menu_title = this.navLinks[i].label;
    this.subLinks = this.navLinks[i].sub_menu;
     
  }

  
}
