import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  usuario:any;

  constructor(private usuarioService: ServicioService) {}  

  ngOnInit() {
    this.recuperarPersona();
  }  

  recargar() {
    this.recuperarPersona();
  }

  recuperarPersona() {
    this.usuarioService.retornar()
      .subscribe( result =>  {this.usuario = result});    
  }

}
