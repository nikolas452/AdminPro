import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda: string = 'leyenda';
  @Input() progreso: Number = 50;
  @Output() cambioValor: EventEmitter<Number> = new EventEmitter();
  @ViewChild('input') input: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onChanges(event: Number){
    if( event >= 100) this.progreso = 100;
     else if(event <= 0)this.progreso = 0;
     else this.progreso = event;
     this.input.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }



  cambiarValor(valor){
    if(this.progreso >= 100 && valor > 0){
     this.progreso = 100; 
      return;
    }
    if(this.progreso <= 0 && valor < 0){
      this.progreso = 0;
      return;
    }
    this.progreso +=  valor;
    this.cambioValor.emit(this.progreso);
    this.input.nativeElement.focus();
  }

}
