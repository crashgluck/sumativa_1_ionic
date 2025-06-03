import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonItem, IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonList } from '@ionic/angular/standalone';
import { EjercicioService } from 'src/app/services/ejercicio.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
  standalone: true,
  imports: [IonList, IonItem,IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HistorialPage implements OnInit {

  constructor(private ejercicioService:EjercicioService) { }
  entrenamientos: any[] = [];

  ngOnInit() {
    this.entrenamientos = this.ejercicioService.getEntrenamientos();
    console.log(this.entrenamientos)
  }

}
