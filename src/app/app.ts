import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { AuthService } from './actividad4/auth/auth.service';

/**
 * Componente raíz de la aplicación.
 * Se declara como componente standalone para que `bootstrapApplication` lo pueda usar.
 * Se importa `RouterOutlet` para permitir la inserción de vistas gestionadas por el router.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // Se usa `AuthService` para iniciar y cerrar sesión desde la UI.
  constructor(private auth: AuthService, private router: Router) {}

  // Se usa para iniciar sesión (simulado).
  login(): void {
    this.auth.login();
  }

  // Se usa para cerrar sesión (simulado).
  logout(): void {
    this.auth.logout();
  }

  // Se usa para comprobar el estado de autenticación en la plantilla.
  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  // Se usa para navegar a /inicio añadiendo parámetros de consulta (queryParams).
  navegarConQuery(): void {
    this.router.navigate(['/inicio'], { queryParams: { promo: 'blackFriday' } });
  }
}
