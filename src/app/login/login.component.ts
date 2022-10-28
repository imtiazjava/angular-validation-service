import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private service:LoginService,private router:Router) {}

  ngOnInit(): void {
     
  }

  formSubmit(data: any) {
    if (data.valid && this.service.checkValidation(this.username,this.password)) {
      alert('welcome to dashboard page');
      this.router.navigate(["dashboard"]);
    } else {
        alert('INVALID USERNAME AND PASSWORD');
    }
  }
}
