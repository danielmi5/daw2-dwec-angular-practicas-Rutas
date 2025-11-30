import { Injectable } from '@angular/core';

/**
 * Servicio de autenticación simulado.
 * Se proporciona en root y expone métodos sencillos para login/logout.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  // Estado de autenticación simulado. Se persiste en `localStorage` para evitar que se pierda al recargar o abrir nuevas pestañas.
  private logged = false;
  private readonly storageKey = 'app_logged';

  constructor() {
    // Se usa `localStorage` para restaurar el estado al inicializar el servicio.
    const estadoLogin = localStorage.getItem(this.storageKey);
    this.logged = estadoLogin === 'true';
  }

  // Se indica si el usuario está autenticado.
  isLoggedIn(): boolean {
    return this.logged;
  }

  // Simula el inicio de sesión.
  login(): void {
    this.logged = true;
    localStorage.setItem(this.storageKey, 'true');
  }

  // Simula el cierre de sesión.
  logout(): void {
    this.logged = false;
    localStorage.setItem(this.storageKey, 'false');
  }
}
