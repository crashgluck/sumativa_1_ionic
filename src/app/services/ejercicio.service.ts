import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {
  private ejercicios: any[] = [];
  private rutinaActual: any = null;
  private entrenamientos: any[] = [];

  constructor() {
    this.cargarEntrenamientos(); // ← Carga los datos guardados en el inicio
  }

  getEjercicios(): any[] {
    return this.ejercicios;
  }

  agregarEjercicio(ejercicio: any) {
    if (this.rutinaActual && Array.isArray(this.rutinaActual.ejercicios)) {
      this.rutinaActual.ejercicios.push(ejercicio);
    }
  }

  limpiarEjercicios() {
    this.ejercicios = [];
  }

  setRutinaActual(rutina: any, fotoBase64?: string) {
  this.rutinaActual = { ...rutina, ejercicios: [], foto: fotoBase64 || null };
}


  getRutinaActual() {
    return this.rutinaActual;
  }

  finalizarRutina() {
    if (this.rutinaActual) {
      this.entrenamientos.push(this.rutinaActual);
      this.guardarEntrenamientos();
      this.rutinaActual = null;
    }
  }

  getEntrenamientos(): any[] {
    return this.entrenamientos;
  }

  private guardarEntrenamientos() {
    localStorage.setItem('entrenamientos', JSON.stringify(this.entrenamientos));
  }

  private cargarEntrenamientos() {
    const data = localStorage.getItem('entrenamientos');
    if (data) {
      this.entrenamientos = JSON.parse(data);
    }
  }

  resetTodo() {
    this.ejercicios = [];
    this.rutinaActual = null;
    this.entrenamientos = [];
    localStorage.removeItem('entrenamientos');
  }
}
