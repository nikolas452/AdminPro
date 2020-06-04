import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { Nopage404Component } from '../shared/nopage404/nopage404.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';


const routes: Routes = [
  {path: '', component: PagesComponent,
   children: [
    {path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' }},
    {path: 'graficas1', component: Graficas1Component, data: { titulo: 'Progress' }},
    {path: 'progress', component: ProgressComponent, data: { titulo: 'Gráficas' }},
    {path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }},
    {path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del Tema' }},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: '**', component: Nopage404Component}
    
  ]},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

