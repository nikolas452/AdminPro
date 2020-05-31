import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { Nopage404Component } from './shared/nopage404/nopage404.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


const routes: Routes = [
  {path: '', component: PagesComponent,
   children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'graficas1', component: Graficas1Component},
    {path: 'progress', component: ProgressComponent},
    {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
    
  ]},
  
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: Nopage404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
