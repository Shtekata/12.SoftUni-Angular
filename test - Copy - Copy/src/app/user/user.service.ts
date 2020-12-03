import { Injectable, OnDestroy } from '@angular/core';
import { StorageService } from '../core/storage.service';
import { Observable, of } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';
const apiUrl = environment.apiUrl;

@Injectable()
export class UserService implements OnDestroy {

  // isLogged = false;

  // constructor(private storage: StorageService, private router: Router) {
  //   this.isLogged = this.storage.getItem('isLogged') || false;
  // }

  // login(data: any): Observable<any>{
  //   this.isLogged = true;
  //   this.storage.setItem('isLogged', true);
  //   return of(data).pipe(delay(3000));
  // }

  // logout(): Observable<any>{
  //   this.isLogged = false;
  //   this.storage.setItem('isLogged', false);
  //   this.router.navigate(['']);
  //   return of(null).pipe(delay(3000));
  // }

  currentUser: IUser | null;

  get isLogged(): boolean {
    return !!this.currentUser;
  }

   constructor(private http: HttpClient, private router: Router) { }

  getCurrentUserProfile(): Observable<any>{
    return this.http.get(`${apiUrl}/users/profile`, { withCredentials: true }).pipe(
      tap((x: any) => this.currentUser = x),
      catchError(x => of(null))
    );
  }

  // GET /users?email=email&password=12345&action=login
  login(data: any): Observable<any>{
    return this.http.post(`${apiUrl}/users/login`, data, { withCredentials: true })
    .pipe(tap(x => this.currentUser = x));
  }

  register(data: any): Observable<any>{
    return this.http.post(`${apiUrl}/users/register`, data, { withCredentials: true })
      .pipe(tap(x => this.currentUser = x));
  }

  logout(): Observable<any>{
    return this.http.post(`${apiUrl}/users/logout`, {}, { withCredentials: true })
      .pipe(
        tap(() => this.currentUser = null),
        catchError((x) => of(x)),
        tap(() => this.currentUser = null)
      );
  }

  edit(data: any): Observable<any>{
    return this.http.put(`${apiUrl}/users/profile`, data, { withCredentials: true })
      .pipe(tap(x => this.currentUser = x));
  }

  ngOnDestroy(): void{}
}
