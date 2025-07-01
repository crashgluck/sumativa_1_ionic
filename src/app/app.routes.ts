import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

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
    loadComponent: () => import('./pages/nuevo-entrenamiento/nuevo-entrenamiento.page').then( m => m.NuevoEntrenamientoPage),
    //canActivate: [AuthGuard]  
  },
  {
    path: 'registrar-ejercicios',
    loadComponent: () => import('./pages/registrar-ejercicios/registrar-ejercicios.page').then( m => m.RegistrarEjerciciosPage),
    //canActivate: [AuthGuard]  
  },
  {
    path: 'finalizar-entrenamiento',
    loadComponent: () => import('./pages/finalizar-entrenamiento/finalizar-entrenamiento.page').then( m => m.FinalizarEntrenamientoPage),
    //canActivate: [AuthGuard]  
  },
  {
    path: 'historial',
    loadComponent: () => import('./pages/historial/historial.page').then( m => m.HistorialPage),
    //canActivate: [AuthGuard]  
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'ejercicios',
    loadComponent: () => import('./pages/ejercicios/ejercicios.page').then( m => m.EjerciciosPage),
    //canActivate: [AuthGuard]  
  },
  {
    path: '**', 
    redirectTo: 'registrar-ejercicios'
  },

];
