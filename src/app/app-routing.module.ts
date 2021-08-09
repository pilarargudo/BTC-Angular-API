import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesCategoryComponent } from './movies-category/movies-category.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';

const routes: Routes = [
  // definimos aquí las rutas
  {path: 'movies/:category', component: MoviesCategoryComponent },
  {path: 'movie/:id', component: MovieDetailComponent },
  // opcional la query
  {path: 'search', component: MoviesSearchComponent },
  {path: 'search/:query', component: MoviesSearchComponent },
  {path: '**', redirectTo: '/movies/popular', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
