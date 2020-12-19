import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';
import { IUser } from './../../interfaces/user';

const user: IUser = {
  id: '',
  username: '',
  name: '',
  email: '',
  address: { street: '' }
};

const userList: IUser[] = [];

const initialState = {
  user: user,
  userList: userList
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentState = initialState;
  // private userListSubject = new BehaviorSubject(null);
  private state$ = new BehaviorSubject(this.currentState);

  // get userList$(): Observable<any> {
  //   return this.userListSubject.asObservable();
  // }
  userList$ = this.state$.pipe(map(x => x.userList), distinctUntilChanged());
  user$ = this.state$.pipe(map(x => x.user), distinctUntilChanged());

  currentId = 0;
  get userListCount(): number { return this.currentState.userList.length; };
  userListCount$ = this.userList$.pipe(map((x: any) => x.length));

  constructor(private http: HttpClient) { }

  // loadUsers(): Observable<any> {
  loadUsers(): void {
    // return this.http.get<any>('https://jsonplaceholder.typicode.com/users', { observe: 'events' });
    // return this.http.get<any>('/users', { observe: 'response' });
    // return this.http.get<any>('/users');
    // this.http.get<any>('/users').subscribe(this.userListSubject);

    // this.userListSubject.next(null);
    // this.http.get<any>('/users').subscribe({
    //   next: x => this.userListSubject.next(x)
    // });

    const newState = { ...this.currentState, userList: [] };
    this.state$.next(newState);
    this.http.get<any>('/users').subscribe({
      next: x => {
        this.currentState = { ...this.currentState, userList: x };
        this.state$.next(this.currentState);
      }
    });
  }

  // loadUser(id: number): Observable<any>{
  //   return this.http.get<any>(`/users/${id}`);
  // }

  loadUser(id: number): void {
    const newState = { ...this.currentState, user: user };
    this.state$.next(newState);
    this.http.get<any>(`/users/${id}`).subscribe({
      next: x => {
        this.currentState = { ...this.currentState, user: x };
        this.state$.next(this.currentState);
      }
    });
  }

}
