import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate() {
     if(localStorage.getItem('uname')=='admin' && localStorage.getItem('pwd')=='imtiaz123'){
       return true;
     }else{
      window.alert('PLEASE LOGIN FIRST!');
      this.route.navigate(['login']);
      return false;
     }
    
  }
  
}
