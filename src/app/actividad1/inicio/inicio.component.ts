import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Componente de la vista de inicio.
 */
@Component({
    selector: 'app-inicio',
    /*
    Template es la plantilla del componente Inicio. Se incluye un menú con enlaces `routerLink` para navegar sin recargar y un mensjae de bienvenida.
    */
    template: `
        <h2>Inicio</h2>
        <nav>
            <a routerLink="/inicio">Inicio</a> |
            <a routerLink="/acerca">Acerca</a>
        </nav>
        <p>Bienvenido a la página de inicio.</p>
    `
})

export class InicioComponent {
}
