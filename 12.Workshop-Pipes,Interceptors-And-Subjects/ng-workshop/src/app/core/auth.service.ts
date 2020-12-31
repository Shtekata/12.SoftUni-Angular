import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, of, zip } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IUser } from '../shared/interfaces';

@Injectable()
export class AuthService {

  // currentUser: IUser | null;
  // get isLogged(): boolean { return !!this.currentUser; }
  
  private _currentUser: BehaviorSubject<IUser | null> = new BehaviorSubject(undefined);
  currentUser$ = this._currentUser.asObservable();
  isLogged$ = this.currentUser$.pipe(map(x => !!x));
  isReady$ = this.currentUser$.pipe(map(x => x !== undefined));

  constructor(private http: HttpClient) { 
    // zip(...[ob1, ob2, ob3]).subscribe(([]) => {
    // });
  }

  // updateCurrentUser(user: IUser | null): Observable<any>{
  updateCurrentUser(user: IUser | null): void{
    this._currentUser.next(user);
    // return of(user);
  }

  // GET /users?email=email&password=12345&action=login
  login(data: any): Observable<any>{
    return this.http.post(`/users/login`, data)
    .pipe(tap((x: IUser) => this._currentUser.next(x)));
  }

  register(data: any): Observable<any>{
    return this.http.post(`/users/register`, data)
      .pipe(tap((x: IUser) => this._currentUser.next(x)));
  }

  logout(): Observable<any>{
    return this.http.post(`/users/logout`, {})
      .pipe(
        tap(() => this._currentUser.next(null)),
        catchError((x) => { this._currentUser.next(null); return of(x); })
      );
  }

   authenticate(): Observable<any>{
     return this.http.get(`/users/profile`).pipe(
      tap((x: IUser) => this._currentUser.next(x)),
      catchError(() => { this._currentUser.next(null); return of(null); })
      // catchError(() => { this.currentUser = null; return EMPTY; })
      // catchError(() => { this.currentUser = null; return []; })
      // catchError(() => { this.currentUser = null; return [null]; })
    );
  }
}
