import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {DemoComponent} from './components/demo/demo.component';
import {ArtistComponent} from './components/artist/artist.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'demo', component: DemoComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
