import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../services/settings/settings.service';



@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(private ajustes: SettingsService) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any){
    this.aplicarCheck(link);
    this.ajustes.aplicarTema(tema);
    
  }

  aplicarCheck(link: any){
    let selectores: any = document.getElementsByClassName('selector');
    for(let ref of selectores){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
  
  colocarCheck(){
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this.ajustes.ajsutes.tema;
    for(let ref of selectores){
      if( ref.getAttribute('data-theme') === tema){
        ref.classList.add('working');
        break;
      }
    }

  }

}
