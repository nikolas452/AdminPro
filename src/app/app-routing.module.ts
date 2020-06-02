import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { Nopage404Component } from './shared/nopage404/nopage404.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  // {path: '**', component: Nopage404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
