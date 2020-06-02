import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { Nopage404Component } from '../shared/nopage404/nopage404.component';


const routes: Routes = [
  {path: '', component: PagesComponent,
   children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'graficas1', component: Graficas1Component},
    {path: 'progress', component: ProgressComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: '**', component: Nopage404Component}
    
  ]},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

