import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./core/components/personajes/personajes.component').then(m => m.PersonajesComponent)
    }
];
