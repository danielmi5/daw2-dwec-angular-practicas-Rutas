import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

/**
 * Componente que lista usuarios.
 * Se declara como componente standalone y exporta una lista estática de ejemplo.
 * Se incluye un `router-outlet` para cargar las rutas hijas (detalle de usuario).
 */
@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent {
  /**
   * Se define una lista estática de usuarios de ejemplo con `id` y `nombre`.
   */
  usuarios = [
    { 
        id: 1, 
        nombre: 'Daniel' 
    },
    { 
        id: 2, 
        nombre: 'Alejandro' 
    },
    { 
        id: 3, 
        nombre: 'Felipe' 
    },
    { 
        id: 4, 
        nombre: 'Kevin' 
    }
  ];
}
