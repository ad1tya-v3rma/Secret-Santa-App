import { HeadingComponent } from '../heading/heading.component';
import { LoginService } from '../services/login-service/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  title: String = "hello"
  hide = true;
  //private service: LoginService;

  constructor(private service: LoginService, private heading: HeadingComponent) {
    //this.service = service;
  }

  checkLogin(email: string, pass: string) {
    const isValid = this.service.validateCredentials(email, pass)
    if (!isValid) {
      alert('wrong credentials')
    }
    else {
      this.service.navigate('welcome')

    }

    this.service.setAuthorization(isValid)
    this.heading.isVisible = isValid;
  }

}
