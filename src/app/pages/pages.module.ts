import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
//Graficas
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent
  ],
  imports: [
    CommonModule,SharedModule,PagesRoutingModule,FormsModule,ChartsModule
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
    
  ]

})
export class PagesModule { }
