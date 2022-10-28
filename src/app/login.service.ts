import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  checkValidation(username: any, password: any): boolean {
    if (username == 'admin' && password == 'imtiaz123') 
    return true;
    else 
    return false;
  }
}
