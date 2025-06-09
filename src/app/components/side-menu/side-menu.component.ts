import { Component } from '@angular/core';
import { IonMenuToggle,IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  imports: [IonMenuToggle,RouterModule,IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem],
  standalone: true,
})

export class SideMenuComponent {}
