import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Nopage404Component } from './nopage404/nopage404.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    SidebarComponent,
    Nopage404Component,
    BreadcrumbsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    Nopage404Component,
    BreadcrumbsComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
