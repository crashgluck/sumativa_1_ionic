import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonMenuButton, IonButton } from '@ionic/angular/standalone';
// Angular Material modules
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { EjercicioService } from 'src/app/services/ejercicio.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-nuevo-entrenamiento',
  templateUrl: './nuevo-entrenamiento.page.html',
  styleUrls: ['./nuevo-entrenamiento.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonButton,
    IonMenuButton,
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

  fotoBase64: string | null = null;

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
    const datos = this.entrenamientoForm.value;
    if (this.fotoBase64) {
      datos.foto = this.fotoBase64;
    }

    this.ejercicioService.setRutinaActual(datos);
    this.ejercicioService.limpiarEjercicios();
    this.router.navigate(['/registrar-ejercicios']);
  } else {
    this.entrenamientoForm.markAllAsTouched();
  }
}


 async tomarFoto() {
  const image = await Camera.getPhoto({
    quality: 70,
    allowEditing: false,
    resultType: CameraResultType.Base64,
    source: CameraSource.Camera
  });

  this.fotoBase64 = 'data:image/jpeg;base64,' + image.base64String;

  // Obtenemos los datos actuales del formulario
  const datos = this.entrenamientoForm.value;

  // Incluimos la foto en los datos
  const rutinaConFoto = { ...datos, foto: this.fotoBase64 };

  this.ejercicioService.setRutinaActual(rutinaConFoto);
}



}


