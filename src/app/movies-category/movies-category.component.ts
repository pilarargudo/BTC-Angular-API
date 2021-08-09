import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMoviesService } from '../api-movies.service';

@Component({
  selector: 'app-movies-category',
  templateUrl: './movies-category.component.html',
  styleUrls: ['./movies-category.component.scss']
})
export class MoviesCategoryComponent implements OnInit {

   category: string;
   rawCategory: string;
   page = 1;
   validCategories = ['top_rated', 'upcoming', 'popular'];
   movies: object[];
 
   showSearch = false;
 
   constructor( private route: ActivatedRoute, private router: Router, private api: ApiMoviesService ) { }
 
   ngOnInit(): void {

     this.route.params.subscribe( params => {
       this.category = params.category.replace('_', ' ');
       this.rawCategory = params.category;
 
       if (this.validCategories.includes(params.category)) {
         this.api.getCategory(params.category).subscribe((response: any) => {
           this.movies = response.results;
           console.log(response);
         });
 
       } else {
         // redirect
         this.router.navigate(['/movies/popular']);
       }
      }); 
   }
 
   moreMovies(){
     this.api.getCategory(this.rawCategory, this.page + 1).subscribe((response: any) => {
       this.page++;
       this.movies = [...this.movies , ...response.results];
     });
   }

}
