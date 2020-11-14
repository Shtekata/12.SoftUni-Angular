import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  loadUsers(): Observable<IUser[]> {
    // this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users').pipe(map(x => x.map(y => y.company.name)));
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
}
