import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common'

/**
 * Se usa `UsuarioComponent` para mostrar una lista sencilla de usuarios y proporcionar enlaces hacia las rutas de detalle de cada usuario. Se declara como componente `standalone` para poder importarlo directamente desde las rutas sin necesidad de incluirlo en un módulo.
 */
@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <h2>Usuarios</h2>
    <ul>
      <li><a [routerLink]="['/usuarios', 1]">Usuario 1</a></li>
      <li><a [routerLink]="['/usuarios', 2]">Usuario 2</a></li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class UsuarioComponent {}