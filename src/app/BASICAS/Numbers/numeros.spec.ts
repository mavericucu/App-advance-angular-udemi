import { incrementar } from "./numeros";



fdescribe('prueba de numeros', () => {
  it( 'Debe devolver 100 si el numero es mayor de 100', () => {
    const res = incrementar(300);
    expect( res ).toBe(100);
  })
  it( 'Debe devolver 100 si el numero es mayor de 100', () => {
    const res = incrementar(50);
    expect( res ).toBe(51);
  })
})