import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})

// ondestroy lo que hace es terminar el todo lo que esta corriendo en este componente al salir de el, llama a la funcion de ngondestroy
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    
    this.subscription = this.regresaObservable()
    // .pipe(
    //   // Vuelve a intentar hasta el infinito o el numero de veces que pongamos dentro de los parentesis. 
    //   retry(2)
    // )
    .subscribe( 
      // Son los tres metodos del subscribe
      numero => console.log('Subs', numero ),
      error => console.log('Error en el obs', error),
      () => console.log('El observador termino!')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {

    return new Observable( (observer: Subscriber<any>) => {
      let contador: number = 0;

      const intervalo = setInterval( () => {

        contador++;

        const salida = {
          valor: contador
        };

        observer.next( salida );

        // if ( contador === 3 ) {
        //   // Tenemos que terminar el proceso de contador y el observer
        //   clearInterval( intervalo );
        //   observer.complete();
        // }

        // if ( contador === 2 ) {
        //   // Asi se manda un error
        //   clearInterval( intervalo );
        //   observer.error('ayuda');
        // }

      }, 1000 );

    }).pipe(
      // Puedes poner tantos maps como quiera y cada uno realizando una operacion. 
      map( resp => resp.valor),
      filter( (valor, index) => {
        if ( (valor % 2) === 1) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
