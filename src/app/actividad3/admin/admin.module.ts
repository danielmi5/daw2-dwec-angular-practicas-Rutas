import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';

// AdminModule agrupa la funcionalidad de administración.
// Importado `AdminDashboardComponent` (standalone) en `imports` en lugar de `declarations`.
@NgModule({
  imports: [CommonModule, AdminRoutingModule, AdminDashboardComponent]
})
export class AdminModule {}
