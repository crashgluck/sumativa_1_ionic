import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'nuevo-entrenamiento',
    loadComponent: () => import('./pages/nuevo-entrenamiento/nuevo-entrenamiento.page').then( m => m.NuevoEntrenamientoPage)
  },
  {
    path: 'registrar-ejercicios',
    loadComponent: () => import('./pages/registrar-ejercicios/registrar-ejercicios.page').then( m => m.RegistrarEjerciciosPage)
  },
  {
    path: 'finalizar-entrenamiento',
    loadComponent: () => import('./pages/finalizar-entrenamiento/finalizar-entrenamiento.page').then( m => m.FinalizarEntrenamientoPage)
  },
  {
    path: 'historial',
    loadComponent: () => import('./pages/historial/historial.page').then( m => m.HistorialPage)
  },
];
