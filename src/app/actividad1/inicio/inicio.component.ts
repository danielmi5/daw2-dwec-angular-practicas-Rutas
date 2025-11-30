import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * Componente de la vista de inicio.
 */
@Component({
    selector: 'app-inicio',
    standalone: true,
    imports: [CommonModule, RouterLink],
    // Se usa `standalone: true` para permitir que `InicioComponent` se pueda utilizar directamente desde `bootstrapApplication` y desde las rutas sin necesidad de declararlo en un NgModule.
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
        <p>Promoción activa: {{ promo || 'Ninguna' }}</p>
    `
})

export class InicioComponent {
    // Se usa `promo` para mostrar el parámetro de consulta `promo` cuando exista.
    promo: string | null = null;

    constructor(private route: ActivatedRoute) {
        // Se usa `queryParams` para leer parámetros de consulta como `promo`.
        this.route.queryParams.subscribe(params => {
            this.promo = params['promo'] ?? null;
        });
    }
}
