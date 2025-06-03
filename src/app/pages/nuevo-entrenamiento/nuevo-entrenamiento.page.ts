import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
// Angular Material modules
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { EjercicioService } from 'src/app/services/ejercicio.service';

@Component({
  selector: 'app-nuevo-entrenamiento',
  templateUrl: './nuevo-entrenamiento.page.html',
  styleUrls: ['./nuevo-entrenamiento.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatCardModule,
  ]
})
export class NuevoEntrenamientoPage implements OnInit {

  entrenamientoForm!: FormGroup;

  constructor(private fb: FormBuilder,private router:Router, private ejercicioService:EjercicioService) {}

  ngOnInit() {
    
    this.entrenamientoForm = this.fb.group({
      fecha: [null, Validators.required],
      rutina: ['', Validators.required],
      notas: ['']
    });
  }

  continuar() {
    if (this.entrenamientoForm.valid) {
      this.ejercicioService.setRutinaActual(this.entrenamientoForm.value);
      this.ejercicioService.limpiarEjercicios();  // empieza con lista vacía
      console.log("Entrenamiento Creado:", this.ejercicioService.getRutinaActual());
      this.router.navigate(['/registrar-ejercicios']);
    } else {
      this.entrenamientoForm.markAllAsTouched();
    }

  }
}


