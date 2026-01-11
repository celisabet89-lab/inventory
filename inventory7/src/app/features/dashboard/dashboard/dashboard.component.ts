import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

interface StatCard {
  title: string;
  value: number | string;
  icon: string;
  color: string;
  bgColor: string;
  trend?: string;
  trendUp?: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private authService = inject(AuthService);

  currentUser = this.authService.currentUserSignal;
  loading = signal(false);

  stats = signal<StatCard[]>([
    {
      title: 'Total Productos',
      value: 156,
      icon: 'fa-box',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      trend: '+12%',
      trendUp: true
    },
    {
      title: 'Stock Crítico',
      value: 8,
      icon: 'fa-exclamation-triangle',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      trend: '-3',
      trendUp: false
    },
    {
      title: 'Movimientos Hoy',
      value: 24,
      icon: 'fa-exchange-alt',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      trend: '+5',
      trendUp: true
    },
    {
      title: 'ONUs Disponibles',
      value: 45,
      icon: 'fa-wifi',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      trend: '+8',
      trendUp: true
    },
    {
      title: 'Alertas Pendientes',
      value: 12,
      icon: 'fa-bell',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      trend: '-2',
      trendUp: false
    },
    {
      title: 'Valor Total',
      value: '$85,240',
      icon: 'fa-dollar-sign',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      trend: '+15%',
      trendUp: true
    }
  ]);

  recentActivities = signal([
    {
      icon: 'fa-arrow-down',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      title: 'Entrada de material',
      description: '50 metros de cable GPON',
      time: 'Hace 5 minutos',
      user: 'Juan Pérez'
    },
    {
      icon: 'fa-arrow-up',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      title: 'Salida de material',
      description: '15 conectores SC/APC',
      time: 'Hace 25 minutos',
      user: 'María González'
    },
    {
      icon: 'fa-wifi',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      title: 'ONU asignada',
      description: 'Huawei HG8245H - Cliente: Pedro Mamani',
      time: 'Hace 1 hora',
      user: 'Carlos Rodríguez'
    },
    {
      icon: 'fa-bell',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      title: 'Alerta de stock',
      description: 'Conectores SC/APC por debajo del mínimo',
      time: 'Hace 2 horas',
      user: 'Sistema'
    }
  ]);

  quickActions = signal([
    {
      label: 'Nuevo Producto',
      icon: 'fa-plus',
      route: '/products/new',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      label: 'Registrar Movimiento',
      icon: 'fa-exchange-alt',
      route: '/stock/movements',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      label: 'Asignar ONU',
      icon: 'fa-wifi',
      route: '/onus',
      color: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      label: 'Nueva Entrega',
      icon: 'fa-truck',
      route: '/deliveries',
      color: 'bg-orange-600 hover:bg-orange-700'
    }
  ]);

  ngOnInit(): void {
    // TODO: Cargar datos reales desde el backend
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.loading.set(true);

    // Simulación de carga de datos
    setTimeout(() => {
      this.loading.set(false);
    }, 1000);
  }

  getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return 'Buenos días';
    if (hour < 18) return 'Buenas tardes';
    return 'Buenas noches';
  }
}
