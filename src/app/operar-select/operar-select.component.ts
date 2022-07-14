import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operar-select',
  templateUrl: './operar-select.component.html',
  styleUrls: ['./operar-select.component.css']
})
export class OperarSelectComponent {

  valor1!:number;
  valor2!:number;
  resultado!:number;

  operaciones = [
    {valor:'suma', muestraValor:'Sumar'},
    {valor:'resta', muestraValor:'Restar'},
    {valor:'multiplicacion', muestraValor:'Multiplicar'},
    {valor:'division', muestraValor:'Dividir'}
  ];

  seleccionada: string = this.operaciones[0].valor;

  operar() {
    switch (this.seleccionada) {
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
