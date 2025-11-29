import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

/**
 * Componente que muestra el detalle de un usuario.
 * Se obtiene el parámetro de ruta `id` mediante `ActivatedRoute`.
 */
@Component({
  selector: 'app-usuario-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuario-detalle.component.html'
})
export class UsuarioDetalleComponent {
  /** Identificador del usuario obtenido de la ruta. */
  id: string | null = null;

  constructor(private route: ActivatedRoute) {
    // Se obtiene el id de la ruta mediante el método `obtenerId`.
    this.obtenerId();
  }

  /**
   * Se obtiene de los parámetros de la ruta la id y se asigna.
   */
  obtenerId(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }
}
