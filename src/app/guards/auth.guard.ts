// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private dbService: DatabaseService,
    private router: Router
  ) {}

  async canActivate(): Promise<boolean> {
    const isLoggedIn = await this.dbService.estaLogeado();
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
