import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { GimnasioService } from 'src/app/services/gimnasio.service';

@Component({
  selector: 'app-ejercicios',
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel],
  templateUrl: './ejercicios.page.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EjerciciosPage implements OnInit {
  ejercicios: any[] = [];

  constructor(private gimnasioService: GimnasioService) {}

  ngOnInit() {
    this.gimnasioService.obtenerEjercicios().subscribe({
      next: (data) => {
        // Aquí extraemos el array "results"
        this.ejercicios = data.results || [];
        console.log('Ejercicios cargados:', this.ejercicios);
      },
      error: (err) => console.error('Error al cargar ejercicios', err)
    });
  }
}
