import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {DemoComponent} from './components/demo/demo.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'demo', component: DemoComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
