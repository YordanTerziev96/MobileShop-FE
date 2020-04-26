import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie';
import { Movies } from '../models/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popular: Movies;
  theaters: Movies;
  kids: Movies;
  drama: Movies;
  searchedRes: any;
  isSearch: boolean;
  constructor(private moviesService: MoviesService) { }

  search(myQuery) {
    let value = myQuery['search'];
      this.moviesService.findAMovie(value).subscribe(data => {
          this.searchedRes = data;
          console.log(this.searchedRes);
          if (this.searchedRes.results.length > 0) {
            this.isSearch = true;
          }
      });
  }
  ngOnInit() {
    this.moviesService
      .getPopular()
      .subscribe(data => {
        this.popular = data;
      });

    this.moviesService.getTheaters()
    .subscribe(data => {
      this.theaters = data;
      console.log(data.results);
    });

    this.moviesService.getKids()
    .subscribe(data => {
      this.kids = data;
    });

    this.moviesService.getDrama()
    .subscribe(data => {
      this.drama = data;
    });
  }

}
