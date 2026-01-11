import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { LoadingService } from '../../core/services/loading.service';
import { User } from '../../models';
import Swal from 'sweetalert2';

interface MenuItem {
  path: string;
  icon: string;
  label: string;
  badge?: number;
  adminOnly?: boolean;
}

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  loadingService = inject(LoadingService);

  currentUser = signal<User | null>(null);
  sidebarOpen = signal(true);
  alertCount = signal(0);

  menuItems: MenuItem[] = [
    { path: '/dashboard', icon: 'fa-chart-line', label: 'Dashboard' },
    { path: '/products', icon: 'fa-box', label: 'Productos' },
    { path: '/stock/existing', icon: 'fa-layer-group', label: 'Stock' },
    { path: '/stock/movements', icon: 'fa-exchange-alt', label: 'Movimientos' },
    { path: '/onus', icon: 'fa-wifi', label: 'ONUs' },
    { path: '/deliveries', icon: 'fa-truck', label: 'Entregas' },
    { path: '/alerts', icon: 'fa-bell', label: 'Alertas', badge: 0 },
    { path: '/clients', icon: 'fa-users', label: 'Clientes' },
    { path: '/users', icon: 'fa-user-cog', label: 'Usuarios', adminOnly: true },
    { path: '/reports', icon: 'fa-file-alt', label: 'Reportes' }
  ];

  ngOnInit(): void {
    // Suscribirse al usuario actual
    this.authService.currentUser$.subscribe(user => {
      this.currentUser.set(user);
    });

    // TODO: Cargar count de alertas pendientes
    // this.loadAlertCount();
  }

  toggleSidebar(): void {
    this.sidebarOpen.update(value => !value);
  }

  isMenuItemVisible(item: MenuItem): boolean {
    if (item.adminOnly) {
      return this.authService.isAdmin();
    }
    return true;
  }

  logout(): void {
    Swal.fire({
      title: '¿Cerrar sesión?',
      text: '¿Estás seguro que deseas salir?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#2563eb',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Sí, salir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout();
      }
    });
  }

  getUserInitials(): string {
    const user = this.currentUser();
    if (user?.profile) {
      return `${user.profile.name.charAt(0)}${user.profile.lastName?.charAt(0) || ''}`;
    }
    return user?.email?.charAt(0).toUpperCase() || 'U';
  }
}
