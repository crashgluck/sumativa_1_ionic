// src/app/services/gimnasio.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GimnasioService {
  private apiUrl = 'https://wger.de/api/v2/exerciseinfo/?language=2';

  constructor(private http: HttpClient) {}

  obtenerEjercicios() {
    return this.http.get<any>(this.apiUrl);
  }
}
