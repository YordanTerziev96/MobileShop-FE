import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('movie') movie: Movie;
  constructor() { }

  ngOnInit() {
  }

}
