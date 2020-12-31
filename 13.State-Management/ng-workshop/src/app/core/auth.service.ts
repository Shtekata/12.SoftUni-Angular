import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, EMPTY, Observable, of, zip } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IRootState } from '../+store';
import { authenticate, login, logout, register } from '../+store/actions';
import { IUser } from '../shared/interfaces';

@Injectable()
export class AuthService {

  // currentUser: IUser | null;
  // get isLogged(): boolean { return !!this.currentUser; }
  
  // private _currentUser: BehaviorSubject<IUser | null> = new BehaviorSubject(undefined);
  // currentUser$ = this._currentUser.asObservable();
  currentUser$ = this.store.select(x => x.auth.currentUser);

  // isLogged$ = this.currentUser$.pipe(map(x => !!x));
  isLogged$ = this.currentUser$.pipe(map(x => x !== null));
  isReady$ = this.currentUser$.pipe(map(x => x !== undefined));


  constructor(private http: HttpClient, private store: Store<IRootState>) { 
    // zip(...[ob1, ob2, ob3]).subscribe(([]) => {
    // });
  }

  // updateCurrentUser(user: IUser | null): Observable<any>{
  //   this._currentUser.next(user);
  // }

  // GET /users?email=email&password=12345&action=login
  login(data: any): Observable<any>{
    return this.http.post(`/users/login`, data)
      // .pipe(tap((x: IUser) => this._currentUser.next(x)));
      // .pipe(tap((user: IUser) => this.store.dispatch(login({ user }))));
      .pipe(tap((x: IUser) => this.store.dispatch(login({ user: x }))));
  }

  register(data: any): Observable<any>{
    return this.http.post(`/users/register`, data)
      // .pipe(tap((x: IUser) => this._currentUser.next(x)));
      .pipe(tap((x: IUser) => this.store.dispatch(register({ user: x }))));
  }

  logout(): Observable<any>{
    return this.http.post(`/users/logout`, {})
      .pipe(
        // tap(() => this._currentUser.next(null)),
        tap(() => this.store.dispatch(logout())),
        // catchError((x) => { this._currentUser.next(null); return of(x); })
        catchError((x) => { this.store.dispatch(logout()); return of(x); })
      );
  }

   authenticate(): Observable<any>{
     return this.http.get(`/users/profile`).pipe(
       // tap((x: IUser) => this._currentUser.next(x)),
       tap((x: IUser) => this.store.dispatch(authenticate({ user: x }))),
       // catchError(() => { this._currentUser.next(null); return of(null); })
       catchError(() => { this.store.dispatch(authenticate({ user: null })); return of(null); })
       // catchError(() => { this.currentUser = null; return EMPTY; })
       // catchError(() => { this.currentUser = null; return []; })
       // catchError(() => { this.currentUser = null; return [null]; })
     );
  }
}
