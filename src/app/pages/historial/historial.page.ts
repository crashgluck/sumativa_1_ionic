import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonMenuButton, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonList } from '@ionic/angular/standalone';
import { EjercicioService } from 'src/app/services/ejercicio.service';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';



@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
  standalone: true,
  imports: [IonMenuButton, IonButton,MatExpansionModule,MatListModule, MatCardModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class HistorialPage implements OnInit {

  volumen!:number;

  constructor(private ejercicioService:EjercicioService) { }
  entrenamientos: any[] = [];

  ngOnInit() {
    this.entrenamientos = this.ejercicioService.getEntrenamientos();
    console.log(this.entrenamientos)
  }

}
