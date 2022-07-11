import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operar-slider',
  templateUrl: './operar-slider.component.html',
  styleUrls: ['./operar-slider.component.css']
})
export class OperarSliderComponent  {

  slider1=0;
  slider2=0;
  slider3=0;
  suma=0;
  
  cambiar() {
    this.suma = this.slider1 + this.slider2 + this.slider3;    
  }

}
