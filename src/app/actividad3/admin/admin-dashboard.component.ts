import { Component } from '@angular/core';

/**
 * Componente del Dashboard.
 * Se declara `standalone` para poder importarlo desde `AdminModule`.
 */
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  template: `
    <h2>Admin Dashboard</h2>
    <p>Se ha cargado el módulo Admin de forma perezosa (lazy loaded).</p>
  `
})
export class AdminDashboardComponent {}
