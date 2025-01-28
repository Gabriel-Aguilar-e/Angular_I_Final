import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RymService {
  private URLbase = 'https://rickandmortyapi.com/api'
  constructor(private http: HttpClient) { }

  obtenerPersonajes(){
    return this.http.get(`${this.URLbase}/character`)
  }
  obtenerUnpersonaje(id: string){
    return this.http.get(`${this.URLbase}/character/${id}`)
  }
}
