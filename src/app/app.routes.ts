import { Routes } from '@angular/router';
import { InicioComponent } from './actividad1/inicio/inicio.component';
import { AcercaComponent } from './actividad1/acerca/acerca.component';
import { UsuarioComponent } from './actividad2/usuario/usuario.component';
import { UsuarioDetalleComponent } from './actividad2/usuario/usuario-detalle.component';
import { AuthGuard } from './actividad4/auth/auth.guard';
import { NotFoundComponent } from './actividad5/not-found.component';

/**
 * Se definen las rutas de la aplicación.
 * - '/inicio' muestra `InicioComponent`.
 * - '/acerca' muestra `AcercaComponent`.
 * - '/usuarios' muestra `UsuarioComponent` y su ruta hija ':id' muestra `UsuarioDetalleComponent` dentro de `UsuarioComponent`.
 * - la ruta vacía redirige a '/inicio'.
 */
export const routes: Routes = [
	{ 
        path: 'inicio', 
        component: InicioComponent 
    },
	{ 
        path: 'acerca', 
        component: AcercaComponent },
	{
		path: 'usuarios',
		component: UsuarioComponent,
		children: [
			{ 
                path: ':id', 
                component: UsuarioDetalleComponent 
            }
		]
	},
	{
		path: 'admin',
		loadChildren: () => import('./actividad3/admin/admin.module').then(m => m.AdminModule),
		canLoad: [AuthGuard]
	},

	// Redirección de la raíz a /inicio
	{ path: '', redirectTo: 'inicio', pathMatch: 'full' },

	// Ruta wildcard para páginas no encontradas (404)
	{ path: '**', component: NotFoundComponent }
	

];
