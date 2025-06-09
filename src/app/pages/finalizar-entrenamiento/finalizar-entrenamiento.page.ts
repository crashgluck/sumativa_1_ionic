import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { EjercicioService } from 'src/app/services/ejercicio.service';
import { IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finalizar-entrenamiento',
  templateUrl: './finalizar-entrenamiento.page.html',
  styleUrls: ['./finalizar-entrenamiento.page.scss'],
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,IonButton]
})
export class FinalizarEntrenamientoPage implements OnInit {

  listaEjercicios: any[] = [];
  rutina: any = null;

  constructor(private ejercicioService: EjercicioService, private router:Router) {}

  ngOnInit() {
    this.rutina = this.ejercicioService.getRutinaActual();
    this.listaEjercicios = this.rutina?.ejercicios || [];
    
  }

  finalizar() {
    this.ejercicioService.finalizarRutina();
    console.log('Entrenamientos guardados:', this.ejercicioService.getEntrenamientos());
    console.log('Finalizando con ejercicios:', this.listaEjercicios);
    // Confirmamos que se guardó en localStorage:
    console.log('JSON:', localStorage.getItem('entrenamientos'));
    // Aquí podrías enviar a backend o limpiar la lista, etc.
     this.router.navigate(['/historial']);
  }
  
}
