import { usuarioIngresado } from "./boolean";



fdescribe('Pruebas de booleans', () => {
  it('Debe regresar true', () => {
    const res = usuarioIngresado();

    expect ( res ).toBeTruthy();
  });
})


