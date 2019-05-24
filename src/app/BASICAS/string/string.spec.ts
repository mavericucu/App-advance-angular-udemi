import { mensaje } from './string';



fdescribe('Pruebas de Strings', () => {
  it( 'Debe de regresar un string', () => {
    const resp = mensaje('Fernando');

    expect( typeof resp ).toBe('string'); 

  });

  it( 'Debe devolver un saludo con el nombre enviado', () => {
    const name = 'juan'
    const resp = mensaje(name);
    
    expect( resp ).toContain(name); 

  });
});

