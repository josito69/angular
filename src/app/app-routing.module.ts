import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoDadosComponent } from './juego-dados/juego-dados.component';
import { OperarCheckboxComponent } from './operar-checkbox/operar-checkbox.component';
import { OperarSelectComponent } from './operar-select/operar-select.component';
import { OperarSliderToggleComponent } from './operar-slider-toggle/operar-slider-toggle.component';
import { OperarSliderComponent } from './operar-slider/operar-slider.component';
import { OperarComponent } from './operarRadioButton/operar.component';
import { SumaComponent } from './suma/suma.component';
import { ThreeInLlineComponent } from './three-in-lline/three-in-lline.component';

const routes: Routes = [
  {path:'',component:JuegoDadosComponent},
  {path:'juegoDados',component:JuegoDadosComponent},
  {path:'threeInLine',component:ThreeInLlineComponent},
  {path:'Form1',component:SumaComponent },
  { path:'Form2',component:OperarComponent},
  {path:'Form3',component:OperarCheckboxComponent},
  {path:'Form4',component:OperarSelectComponent },
  {path:'Form5',component:OperarSliderComponent },
  {path:'Form6',component:OperarSliderToggleComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
