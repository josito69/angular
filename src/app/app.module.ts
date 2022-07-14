import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { JuegoDadosComponent } from './juego-dados/juego-dados.component';
import { DadoComponent } from './dado/dado.component';
import { ThreeInLlineComponent } from './three-in-lline/three-in-lline.component';
import { SumaComponent } from './suma/suma.component';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { OperarComponent } from './operarRadioButton/operar.component';
import { MatRadioModule } from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OperarCheckboxComponent } from './operar-checkbox/operar-checkbox.component';
import { OperarSelectComponent } from './operar-select/operar-select.component';
import { MatSelectModule } from '@angular/material/select';
import { OperarSliderComponent } from './operar-slider/operar-slider.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { OperarSliderToggleComponent } from './operar-slider-toggle/operar-slider-toggle.component';
import { TablaComponent } from './tabla/tabla.component';
import { MatTableModule } from '@angular/material/table';
import { PaginatorComponent } from './paginator/paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SorteatorComponent } from './sorteator/sorteator.component';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    JuegoDadosComponent,
    DadoComponent,
    ThreeInLlineComponent,
    SumaComponent,
    OperarComponent,
    OperarCheckboxComponent,
    OperarSelectComponent,
    OperarSliderComponent,
    OperarSliderToggleComponent,
    TablaComponent,
    PaginatorComponent,
    SorteatorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }