import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    //No le pasamos hhtp por lo que falseamos con el null
    const servicio = new MediaDevices(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('', () => {

   
    });


});
