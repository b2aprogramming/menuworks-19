import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)},
    {path: 'ingredients', loadComponent: () => import('./pages/ingredients2/ingredients2.component').then(m => m.Ingredients2Component),
        children: [
         {path: 'search', loadComponent: () => import('./pages/ingredients2/ingredients2-search/ingredients2-search.component').then(m => m.Ingredients2SearchComponent)},
    ]},
    {path: '', redirectTo: '', pathMatch: 'full'}
];
