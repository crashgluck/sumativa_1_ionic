import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonInput,IonLabel, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ejercicio-form',
  templateUrl: './ejercicio-form.component.html',
  styleUrls: ['./ejercicio-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule,IonLabel,IonItem,IonInput]
})
export class EjercicioFormComponent implements OnInit {

  @Input() formGroup!: FormGroup;

  constructor() { }

  ngOnInit() {}

}
