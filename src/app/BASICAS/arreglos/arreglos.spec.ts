import { obtenerRobots } from './arreglos';
import { ExpectedConditions } from 'protractor';



fdescribe('Pruebas de arreglos', () => {
  it( 'Debe de retornar al menos 3 robots', () => {
    const res = obtenerRobots();
    expect( res.length ).toBeGreaterThanOrEqual(3);
  });

  it( 'Debe de retornar Megman y robocop', () => {
    const res = obtenerRobots();
    expect( res ).toContain('MegaMan');
    expect( res ).toContain('Robocop');
  });
});
