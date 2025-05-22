import { Routes } from '@angular/router';
import { BuscadorPage } from './pages/buscador/buscador.page';
import { DetallePage } from './pages/detalle/detalle.page';

export const routes: Routes = [
  { path: '', component: BuscadorPage },
  { path: 'detalle/:id', component: DetallePage },
  {
    path: 'buscador',
    loadComponent: () => import('./pages/buscador/buscador.page').then( m => m.BuscadorPage)
  },
  {
    path: 'detalle',
    loadComponent: () => import('./pages/detalle/detalle.page').then( m => m.DetallePage)
  },
];
