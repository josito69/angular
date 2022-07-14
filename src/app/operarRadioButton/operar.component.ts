import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operar',
  templateUrl: './operar.component.html',
  styleUrls: ['./operar.component.css']
})
export class OperarComponent {
  valor1!:number;
  valor2!:number;
  resultado!:number;

  operacionSeleccionada: string = 'suma';
  tipoOperaciones = [
    'suma',
    'resta',
    'multiplicacion',
    'division',
  ];

  operar() {
    switch (this.operacionSeleccionada) {
      case 'suma' : this.resultado = this.valor1 + this.valor2;
                    break;
      case 'resta' : this.resultado = this.valor1 - this.valor2;
                     break;
      case 'multiplicacion' : this.resultado = this.valor1 * this.valor2;
                              break;
      case 'division' : this.resultado = this.valor1 / this.valor2;
                        break;
    }
  }

}
