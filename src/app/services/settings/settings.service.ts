import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajsutes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default-dark'
  }
  
  constructor(@Inject(DOCUMENT) private _document) { 
    this.cargarAjustes();
  }


  guardaAjustes(){
    console.log('Guardado lince');
    localStorage.setItem('ajustes', JSON.stringify(this.ajsutes));
  }
  cargarAjustes(){
    if(localStorage.getItem('ajustes')){
      this.ajsutes = JSON.parse(localStorage.getItem('ajustes'));
      // console.log('Cargando del localstorage');
      this.aplicarTema(this.ajsutes.tema);
    }
    // } else console.log('Usando valores por defecto');
  }

  aplicarTema(tema: string){
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);
    this.ajsutes.tema = tema;
    this.ajsutes.temaUrl = url;
    this.guardaAjustes();
  }



}

interface Ajustes {
  temaUrl: string;
  tema: string;
}