import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private authorized: boolean;
  private email: string = 'admin@abc.com'
  private pass: string = 'admin'
  constructor(private router: Router, private route: ActivatedRoute) {
    this.authorized = false;
    console.log('login service initialized');
  }

  isAuthorized(): boolean {
    console.log(this.authorized)
    return this.authorized;
  }

  setAuthorization(isValid: boolean) {

    this.authorized = isValid;
    console.log(this.authorized)

  }

  validateCredentials(email: string, pass: string): boolean {
    if (this.email === email && this.pass === pass) {
      return true;
    }
    else {
      return false;
    }
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }
}
