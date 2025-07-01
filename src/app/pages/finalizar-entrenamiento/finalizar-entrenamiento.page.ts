import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { EjercicioService } from 'src/app/services/ejercicio.service';
import { IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';


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

  constructor(private ejercicioService: EjercicioService, private router:Router, private db: DatabaseService) {}

  ngOnInit() {
    this.rutina = this.ejercicioService.getRutinaActual();
    this.listaEjercicios = this.rutina?.ejercicios || [];
    // Aquí puedes validar que tenga foto
    console.log('Foto en rutina:', this.rutina?.foto);
    
  }

  async finalizar() {
  try {
    const rutina = this.ejercicioService.getRutinaActual();
    const ejercicios = this.ejercicioService.getEjercicios(); // <- asegúrate de usar este método

    const idEntrenamiento = await this.db.guardarEntrenamiento(rutina);

    for (const ej of ejercicios) {
      await this.db.guardarEjercicio(idEntrenamiento, ej);
    }

    this.ejercicioService.finalizarRutina();
    console.log('Entrenamiento guardado en SQLite');
    this.router.navigate(['/historial']); // o a donde quieras ir
  } catch (error) {
    console.error('Error al guardar entrenamiento:', error);
  }
}
  
}
