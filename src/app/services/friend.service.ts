import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Friend } from '../models/friend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  url = '/api/friends'

  constructor(
    private http: HttpClient
  ) { }

  // get friends
  getFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>(this.url)
  }

  // add friend
  createFriend(data: Friend): Observable<Friend> {
    return this.http.post<Friend>(this.url, data)
  }

  // delete friend
  deleteFriend(id: string): Observable<Friend> {
    return this.http.delete<Friend>(`${ this.url }/${ id }`)
  }

  // get friend
  getFriend(id: string): Observable<Friend> {
    return this.http.get<Friend>(`${ this.url }/${ id }`)
  }

}
