import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../models/movies';

const apiKey = '611596c13e034ba98b02eb2d4ee90a51';

@Injectable()
export class MoviesService {
    path: String = 'https://api.themoviedb.org/3/';
    popular: String = 'discover/movie?sort_by=popularity.desc';
    authentication: String = '&api_key=';
    theaters: String = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
    kids: String = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
    drama: String = 'discover/movie?with_genres=18&primary_release_year=2014';
    movie: String = 'movie/';
    movieAuth: String = '?api_key=';

    constructor(private http: HttpClient) { }

    findAMovie(myQuery) {
        console.log(myQuery);
        return this.http.get('https://api.themoviedb.org/3/search/movie?query=' + myQuery + '&api_key=' + apiKey);
    }

    getPopular(): Observable<Movies> {
        return this.http.get<Movies>(`${this.path}${this.popular}${this.authentication}${apiKey}`);
    }

    getTheaters(): Observable<Movies> {
        return this.http.get<Movies>(`${this.path}${this.theaters}${this.authentication}${apiKey}`);
    }

    getKids(): Observable<Movies> {
        return this.http.get<Movies>(`${this.path}${this.kids}${this.authentication}${apiKey}`);
    }

    getDrama(): Observable<Movies> {
        return this.http.get<Movies>(`${this.path}${this.drama}${this.authentication}${apiKey}`);
    }

    getMovie(id) {
        return this.http.get(`${this.path}${this.movie}` + id + `${this.movieAuth}${apiKey}`);
    }
}
