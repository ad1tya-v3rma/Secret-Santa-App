import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoginService } from '../services/login-service/login.service';
import { Component, Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
@Injectable
  (
    {
      providedIn: 'root'
    }
  )
export class HeadingComponent {
  isVisible: boolean;

  constructor(private service: LoginService, private router: Router, private route: ActivatedRoute) {
    this.isVisible = this.service.isAuthorized();
  }

  isValid() {
    this.isVisible = this.service.isAuthorized();
  }

  logout() {
    this.service.setAuthorization(false);
    this.router.navigateByUrl('login')
  }

}
