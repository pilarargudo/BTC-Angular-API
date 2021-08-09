import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiMoviesService } from '../api-movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieData: object;
  similarMovies: object[];

  constructor(private route: ActivatedRoute, private api: ApiMoviesService) { }

  ngOnInit(): void {

    this.route.params.subscribe( params => {

        // subirá cada vez que cambie la url/id
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

        this.api.getMovie(params.id).subscribe((response: object) => {
          this.movieData = response;
          console.log(response);
        });

        this.api.getSimilar(params.id).subscribe((response: any) => {
          this.similarMovies = response.results;
          // console.log(response.results);
        });

    });

  }

}
