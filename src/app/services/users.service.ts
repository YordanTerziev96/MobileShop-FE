
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {

  private registerUrl: string;
  private loginUrl: string;

  constructor(private http: HttpClient) {
    this.registerUrl = 'http://localhost:8080/register';
    this.loginUrl = 'http://localhost:8080/login';

  }
  public register(user: User): Observable<string> {
      console.log(user);
    return this.http.post<string>(this.registerUrl, user);
  }

  public login(user: User): Observable<string> {
    console.log(user);
  return this.http.post<string>(this.loginUrl, user);
}
}
