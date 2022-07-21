import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }  

  retornar() {
    return this.http.get("https://randomuser.me/api/");
  }     
}
