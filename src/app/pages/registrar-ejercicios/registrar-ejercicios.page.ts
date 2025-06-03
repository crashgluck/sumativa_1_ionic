import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EjercicioService } from 'src/app/services/ejercicio.service';
import { EjercicioFormComponent } from 'src/app/components/ejercicio-form/ejercicio-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-ejercicios',
  templateUrl: './registrar-ejercicios.page.html',
  styleUrls: ['./registrar-ejercicios.page.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    ReactiveFormsModule,
    EjercicioFormComponent,
  ]
})
export class RegistrarEjerciciosPage implements OnInit {

  ejercicioForm!: FormGroup;
  listaEjercicios: any[] = [];

  constructor(private fb: FormBuilder, private router:Router, private ejercicioService: EjercicioService) {}

  ngOnInit() {
    this.ejercicioForm = this.fb.group({
      nombre: ['bench', Validators.required],
      repeticiones: ['1', Validators.required],
      peso: ['10']
    });
  }

  agregarEjercicio() {
  const nuevoEjercicio = this.ejercicioForm.value;
  this.ejercicioService.agregarEjercicio(nuevoEjercicio); // ✅ Lo guardas en rutinaActual
  this.listaEjercicios.push(nuevoEjercicio);
  this.ejercicioForm.reset();
  }

  irAFinalizar() {
  if (this.listaEjercicios.length > 0) {
    console.log("Ejercicios registrados:", this.listaEjercicios);
    this.router.navigate(['/finalizar-entrenamiento']);
  } else {
    console.log("No hay ejercicios para finalizar");
  }
}
}
