import { Jugador } from './clases';




fdescribe ( 'Prueba de clases ', () => {

  const jugador = new Jugador();


  // Ciclos de vida de las pruebas
  // beforeAll();
  // beforeEach();
    beforeEach( () => {
      jugador.hp = 100;
    })

  // afterAll();
  // afterEach();

  it ('Debe recibir 20 de hp por 80 de daño', () => {
    // const jugador = new Jugador();

    const resp = jugador.recibeDaño(80);

    expect( resp ).toBe(20);

  })

  it ('Debe recibir 50 de hp por 50 de daño', () => {
    // const jugador = new Jugador();

    const resp = jugador.recibeDaño(50);

    expect( resp ).toBe(50);

  })

  it ('Debe recibir 0 de hp por 200 de daño', () => {
    // const jugador = new Jugador();

    const resp = jugador.recibeDaño(200);

    expect( resp ).toBe(0);

  })


})