import { Jugador2 } from './Jugador2';
import { hasParentInjector } from '@angular/core/src/render3/util';




fdescribe( 'Jugador 2 Emit', () => {

  let jugador: Jugador2;

  beforeEach( () => {
    jugador = new Jugador2();
  });


  it( 'Debe emitir un evento cuando recibe daño', () => {
    let nuevoHP = 0;

    jugador.hpCambia.subscribe( hp => {
      nuevoHP = hp;
    });

    jugador.recibeDaño(1000);
    expect( nuevoHP ).toBe(0);
  });

  it( 'Debe emitir un evento cuando recibe daño y sobrevivir si es menos de 100', () => {
    let nuevoHP = 0;

    jugador.hpCambia.subscribe( hp => nuevoHP = hp );

    jugador.recibeDaño(50);
    expect( nuevoHP ).toBe(50);
  });


})