import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()

export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  }
  constructor( @Inject(DOCUMENT) private _document ) {
    // La llamada a cargarajustes se hace desde componentFactoryName.ts
    this.cargarAjustes();
  }

  guardarAjustes() {
    // Local storage solo acepta stringes por eso lo cambiamos con stringify.
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ));
  }

  cargarAjustes() {

    if (localStorage.getItem('ajustes')){
      // Recibimos un json y lo trasformamos
      this.ajustes = JSON.parse( localStorage.getItem('ajustes'));
      this.aplicarTema( this.ajustes.tema );
    } else {
      this.aplicarTema( this.ajustes.tema );
    }
  }

  aplicarTema( tema: string ) {
    
    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    // Llamamos a la funcion que guarda en el local storage y que esta en el settings ServiceUIFrameContext. 
    this.guardarAjustes();
    // La funcion de carga del tema se ejecuta al lanzar la app por lo que esta en el app component la llamada

  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
