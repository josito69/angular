import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operar-checkbox',
  templateUrl: './operar-checkbox.component.html',
  styleUrls: ['./operar-checkbox.component.css']
})
export class OperarCheckboxComponent  {

  valor1!:number;
  valor2!:number;
  resultado!:string;
  opcion1=false;
  opcion2=false;
  opcion3=false;
  opcion4=false;

  operar() {
    this.resultado='';
    if (this.opcion1) {
      let ope = this.valor1 + this.valor2;
      this.resultado+=`La suma es ${ope} \n`;
    }
    if (this.opcion2) {
      let ope = this.valor1 - this.valor2;
      this.resultado+=`La resta es ${ope}\n`;
    }
    if (this.opcion3) {
      let ope = this.valor1 * this.valor2;
      this.resultado+=`El producto es ${ope}\n`;
    }
    if (this.opcion4) {
      let ope = this.valor1 / this.valor2;
      this.resultado+=`La division es ${ope}\n`;
    }
  }

}
