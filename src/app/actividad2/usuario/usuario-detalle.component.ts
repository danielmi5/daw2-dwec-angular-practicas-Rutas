import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <h3>Detalle de Usuario</h3>
    <p>ID de usuario: {{ userId }}</p>
  `
})
export class UsuarioDetalleComponent implements OnInit {
/**
 * Se usa `UsuarioDetalleComponent` para mostrar la información básica del usuario seleccionando el parámetro `id` de la ruta.
 */
  userId: string | null = null;

  // Se usa `ActivatedRoute` para acceder a los parámetros de la ruta.
  constructor(private route: ActivatedRoute) {}

  // Se usa `ngOnInit` para leer el parámetro `id` al inicializar el componente mediante `snapshot.paramMap`.
  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}
