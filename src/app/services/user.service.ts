import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = '/api/user'

  constructor(
    private http: HttpClient
  ) { }

  isLogged(){
    return localStorage.getItem('token')
  }

  login(data: any): Observable<User> {
    return this.http.post<User>(`${ this.url }/login`, data)
  }

}
