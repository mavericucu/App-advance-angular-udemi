import { FormulatioRegistro } from './formulatio';
import { FormBuilder } from '@angular/forms';




fdescribe('Formulatios', () => {
  let componente: FormulatioRegistro;

  beforeEach(() => {
    componente = new FormulatioRegistro(new FormBuilder());
  });

  it('Debe crear un formulario con dos campos', () => {
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });

  it('Email obligatorio', () => {

    const control = componente.form.get('email');
    control.setValue('');

    expect( control.valid ).toBeFalsy();

  });

  it('Email obligatorio', () => {

    const control = componente.form.get('email');
    control.setValue('');

    expect( control.valid ).toBeFalsy();

  });

  it('Email obligatorio y valido', () => {

    const control = componente.form.get('email');
    control.setValue('ismael@gmail.com');
    
    expect( control.valid ).toBeTruthy();

  });


});