import { Routes } from '@angular/router';
import { authGuard, adminGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // Rutas públicas
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component')
      .then(m => m.LoginComponent)
  },

  // Rutas protegidas
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./layouts/main-layout/main-layout.component')
      .then(m => m.MainLayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard/dashboard.component')
          .then(m => m.DashboardComponent)
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            loadComponent: () => import('./features/products/product-list/product-list.component')
              .then(m => m.ProductListComponent)
          },
          {
            path: 'new',
            loadComponent: () => import('./features/products/product-form/product-form.component')
              .then(m => m.ProductFormComponent)
          },
          {
            path: 'edit/:id',
            loadComponent: () => import('./features/products/product-form/product-form.component')
              .then(m => m.ProductFormComponent)
          }
        ]
      },
      {
        path: 'stock',
        children: [
          {
            path: 'existing',
            loadComponent: () => import('./features/stock/existing-list/existing-list.component')
              .then(m => m.ExistingListComponent)
          },
          {
            path: 'movements',
            loadComponent: () => import('./features/stock/movements-list/movements-list.component')
              .then(m => m.MovementsListComponent)
          }
        ]
      },
      {
        path: 'onus',
        children: [
          {
            path: '',
            loadComponent: () => import('./features/onus/onu-list/onu-list.component')
              .then(m => m.OnuListComponent)
          },
          {
            path: 'new',
            loadComponent: () => import('./features/onus/onu-form/onu-form.component')
              .then(m => m.OnuFormComponent)
          },
          {
            path: 'assign/:id',
            loadComponent: () => import('./features/onus/onu-assignment/onu-assignment.component')
              .then(m => m.OnuAssignmentComponent)
          }
        ]
      },
      {
        path: 'alerts',
        loadComponent: () => import('./features/alerts/alert-panel/alert-panel.component')
          .then(m => m.AlertPanelComponent)
      },
      {
        path: 'deliveries',
        loadComponent: () => import('./features/deliveries/delivery-list/delivery-list.component')
          .then(m => m.DeliveryListComponent)
      },
      {
        path: 'clients',
        loadComponent: () => import('./features/clients/client-list/client-list.component')
          .then(m => m.ClientListComponent)
      },
      {
        path: 'users',
        canActivate: [adminGuard], // Solo admins
        loadComponent: () => import('./features/users/user-list/user-list.component')
          .then(m => m.UserListComponent)
      },
      {
        path: 'reports',
        loadComponent: () => import('./features/reports/report-dashboard/report-dashboard.component')
          .then(m => m.ReportDashboardComponent)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
