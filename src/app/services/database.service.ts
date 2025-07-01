// src/app/services/database.service.ts

import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({ providedIn: 'root' })
export class DatabaseService {
  private db: SQLiteObject | null = null;

  constructor(private sqlite: SQLite, private platform: Platform) {
    this.platform.ready().then(() => this.initDB());
  }

  async initDB() {
    try {
      this.db = await this.sqlite.create({
        name: 'usuarios.db',
        location: 'default'
      });

      await this.db.executeSql(`
        CREATE TABLE IF NOT EXISTS usuarios (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          correo TEXT UNIQUE,
          contraseña TEXT
        );
      `, []);

      await this.db.executeSql(`
        CREATE TABLE IF NOT EXISTS entrenamientos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          fecha TEXT,
          rutina TEXT,
          notas TEXT
        );
      `, []);

      await this.db.executeSql(`
        CREATE TABLE IF NOT EXISTS ejercicios (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          entrenamiento_id INTEGER,
          nombre TEXT,
          repeticiones INTEGER,
          peso REAL,
          FOREIGN KEY (entrenamiento_id) REFERENCES entrenamientos(id)
        );
      `, []);

      console.log('Base de datos inicializada');
    } catch (err) {
      console.error('Error al crear DB:', err);
    }
  }

  async registrarUsuario(correo: string, contraseña: string): Promise<boolean> {
    if (!this.db) return false;
    try {
      await this.db.executeSql('INSERT INTO usuarios (correo, contraseña) VALUES (?, ?)', [correo, contraseña]);
      return true;
    } catch (e) {
      console.error('Error al registrar usuario:', e);
      return false;
    }
  }

  async loginUsuario(correo: string, contraseña: string): Promise<boolean> {
    if (!this.db) return false;
    try {
      const res = await this.db.executeSql('SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?', [correo, contraseña]);
      return res.rows.length > 0;
    } catch (e) {
      console.error('Error al iniciar sesión:', e);
      return false;
    }
  }

  async guardarEntrenamiento(rutina: any): Promise<number> {
    if (!this.db) throw new Error('DB no inicializada');
    const res = await this.db.executeSql(
      'INSERT INTO entrenamientos (fecha, rutina, notas) VALUES (?, ?, ?)',
      [rutina.fecha, rutina.rutina, rutina.notas]
    );
    return res.insertId;
  }

  async guardarEjercicio(idEntrenamiento: number, ejercicio: any) {
    if (!this.db) throw new Error('DB no inicializada');
    await this.db.executeSql(
      'INSERT INTO ejercicios (entrenamiento_id, nombre, repeticiones, peso) VALUES (?, ?, ?, ?)',
      [idEntrenamiento, ejercicio.nombre, ejercicio.repeticiones, ejercicio.peso]
    );
  }
  async estaLogeado(): Promise<boolean> {
  const session = localStorage.getItem('usuarioLogeado');
  return !!session; // true si hay sesión guardada
}

}
