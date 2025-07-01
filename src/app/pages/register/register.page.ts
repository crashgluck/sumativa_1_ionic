// src/app/pages/register/register.page.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, ToastController } from '@ionic/angular/standalone';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    IonHeader, IonToolbar, IonTitle, IonContent
  ]
})
export class RegisterPage {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private db: DatabaseService,
    private router: Router,
    private toastCtrl: ToastController
  ) {
    this.registerForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required]
    });
  }

  async onRegister() {
    if (this.registerForm.valid) {
      const { correo, contraseña } = this.registerForm.value;
      const success = await this.db.registrarUsuario(correo, contraseña);
      if (success) {
        this.showToast('Registro exitoso');
        this.router.navigate(['/login']); // ajusta la ruta si es necesario
      } else {
        this.showToast('Error: correo ya registrado o fallo interno');
      }
    }
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }
}
