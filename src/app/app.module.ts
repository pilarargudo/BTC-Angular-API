import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ApiMoviesService } from './api-movies.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';
import { MoviesDisplayComponent } from './movies-display/movies-display.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    MoviesCategoryComponent,
    MoviesDisplayComponent,
    MoviesSearchComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiMoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
