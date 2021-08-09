import { Component, OnInit } from '@angular/core';
import { ApiMoviesService } from '../api-movies.service';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss']
})
export class MoviesSearchComponent implements OnInit {

  moviesFound: object[] = [];
  query: '';

  constructor( private api: ApiMoviesService) {
  }
  
  ngOnInit(): void {
  }

  search() {
    if (this.query) {
    this.api.searchMovies(this.query).subscribe((response: any) => {
        this.moviesFound = response.results;
        console.log(response);
      });
    } else {
      this.moviesFound = [];
    }
  }

}
