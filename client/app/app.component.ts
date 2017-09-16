import {Component} from '@angular/core';
import {BookService} from './BLL/book.service';
import {CartService} from './BLL/cart.service';
import {AuthService} from './BLL/auth.service';
import{HistoryService} from  './BLL/History.Service'
import {Router} from '@angular/router';
@Component
({
  selector: 'pm-app',
  moduleId: module.id,
  templateUrl:'app.component.html',
  providers: [ BookService,
    CartService,
      HistoryService,
  ]

})
export class AppComponent {
  constructor(
      private authService:AuthService,
      private router:Router)
  { }

  pageTitle:string ='book Store';

  onLogoutClick(){
    this.authService.logout();
    alert('You are logged out');//, {cssClass:'alert-success', timeout: 3000 });
    this.router.navigate(['/Login']);
    return false;
  }

}

