import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  islogged(){
    return true;
  }
  checkValidation(username: any, password: any): boolean {
    if (username == 'admin' && password == 'imtiaz123') {
      localStorage.setItem('uname','admin');
      localStorage.setItem('pwd','imtiaz123');
      return true;
    }
    else 
    return false;
  }
}
