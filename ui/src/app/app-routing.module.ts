import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, Route } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes =
  [
    {
      path: "about",
      component: AboutComponent
    },
    {
      path: "welcome",
      component: HeaderComponent
    },
    {
      path: "login",
      component: LoginFormComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
