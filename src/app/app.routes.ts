import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: 'about',  loadComponent: () => import('./header/about/about.component').then(c => c.AboutComponent)},
    { path: 'current-openings', loadComponent: () => import('./header/current-openings/current-openings.component').then(c => c.CurrentOpeningsComponent)},
    { path: 'join', loadComponent: () => import('./header/sign-in/sign-in.component').then(c => c.SignInComponent)},
    { path: 'sign-in', loadComponent: () => import('./header/sign-in/sign-in.component').then(c => c.SignInComponent)},
    { path: '', redirectTo: '/current-openings', pathMatch: 'full' }, // Redirect to the default route
    { path: '**', redirectTo: '/current-openings', pathMatch: 'full' }, // Redirect to the default route
];
