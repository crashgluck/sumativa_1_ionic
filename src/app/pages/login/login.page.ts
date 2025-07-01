import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import material angular
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DatabaseService } from 'src/app/services/database.service';
// importo router
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,IonHeader, IonToolbar, IonTitle, IonContent
  ],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router:Router,private db: DatabaseService) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required]
    });
  }

  async onLogin() {
  const { correo, contraseña } = this.loginForm.value;
  const ok = await this.db.loginUsuario(correo, contraseña);
  if (ok) this.router.navigate(['/nuevo-entrenamiento']);
  else alert('Usuario incorrecto');
}

irRegistrar(){
    console.log("presionaste catalogo en home")
    this.router.navigate(['/register']);
  }

}
