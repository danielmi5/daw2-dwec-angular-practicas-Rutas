import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

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
}
