import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {}

  buscar(nombre: string) {
    return this.http.get(`${this.apiUrl}?name=${nombre}`);
  }

  detalle(id: string) {
    return this.http.get(`${this.apiUrl}${id}`);
  }
}
