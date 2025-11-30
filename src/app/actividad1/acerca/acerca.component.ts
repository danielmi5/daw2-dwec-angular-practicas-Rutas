import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Componente de la vista "Acerca".
 */
@Component({
    selector: 'app-acerca',
    // Se usa `standalone: true` para poder utilizar `AcercaComponent` sin declararlo en un módulo.
    standalone: true,
    imports: [RouterLink],
    /*
    Template es la plantilla del componente Acerca. Se incluye un menú con enlaces `routerLink` para navegar sin recargar y un mensaje.
    */
    template: `
    <h2>Acerca</h2>
    <nav>
        <a routerLink="/inicio">Inicio</a> |
        <a routerLink="/acerca">Acerca</a>
    </nav>
    <p>Información acerca de esta aplicación.</p>
    `
    })

export class AcercaComponent {
}
