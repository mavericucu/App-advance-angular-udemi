import { Component, OnInit, Input, Output, ViewChild,  EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {
  //Con el #en el html pone un listener en el. 
  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input(name) leyenda: string = '';
  @Input() progress: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { 

  }
  // Recibimos lols datos de progress component pero estos datos
  // no se reciben hasta que se ejecuta la app es decir en el ngOnInit 
  // en el constructor seguiria siendo el valor declarado aqui.
  ngOnInit() {

  }

  onChanges(newValue: number ) {

    // let elemHTML = document.getElementsByName('progress')[0];
  

    if ( newValue >= 100) {
      this.progress = 100;
    } else if ( newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    // elemHTML.value = this.progress;
    this.txtProgress.nativeElement.value = this.progress

    this.cambioValor.emit( this.progress );
  }

  changeValue(value: number) {
    if (this.progress > 100 && value > 0 ) {
      this.progress = 100;
      return;
    }

    if (this.progress < 0 && value < 0 ) {
      this.progress = 0;
      return;
    }
    this.progress = this.progress + value;

    this.cambioValor.emit( this.progress );

    this.txtProgress.nativeElement.focus();
  }

}
