import { Component, OnInit } from '@angular/core';
import { resolveReflectiveProviders } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    

    this.contarTres().then(
      () => console.log ('Termino!')
    )
    .catch( error => console.error('Error en la promesa', error))
  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    return new Promise( (resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval( () => {

        contador += 1;

        if ( contador === 3 ) {
          resolve( true );
          clearInterval(intervalo);
        }

      }, 1000 );

    });
  }

}
