import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

/**
 * Guard que impide el acceso si el usuario no está autenticado.
 * Implementa `CanLoad` para evitar la carga del módulo lazy
 * e `CanActivate` para proteger rutas internas.
 */
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  // Evita la carga del módulo si no está autenticado.
  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    if (this.auth.isLoggedIn()) return true;
    // Redirige a inicio si no está autenticado.
    this.router.navigate(['/inicio']);
    alert("No estás autenticado");
    return false;
  }

  // Impide activación de ruta si no está autenticado.
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.auth.isLoggedIn()) return true;
    // Redirige a inicio y devuelve false.
    this.router.navigate(['/inicio']);
    return false;
  }
}
