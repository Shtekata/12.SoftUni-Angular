import { Injectable, OnDestroy } from '@angular/core';
import { StorageService } from '../core/storage.service';
import { Observable, of } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';
import { AuthService } from '../core/auth.service';
import { USE_BASE_URL } from '../shared/constants';
import { Store } from '@ngrx/store';
import { IRootState } from '../+store';
import { update } from '../+store/actions';
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

  constructor(
    private http: HttpClient,
    // private authService: AuthService,
    private store: Store<IRootState>
  ) { }

  getCurrentUserProfile(): Observable<any>{
    // return this.http.get(`${USE_BASE_URL}/users/profile`).pipe(
    return this.http.get(`/users/profile`).pipe(
      // tap((x: IUser) => this.authService.updateCurrentUser(x)),
      tap((x: IUser) => this.store.dispatch(update({ user: x }))),
      // catchError(x => { this.authService.updateCurrentUser(null); return of(null); })
      catchError(x => { this.store.dispatch(update({ user: null })); return of(null); })
    );
  }

  updateProfile(data: any): Observable<IUser>{
    return this.http.put(`/users/profile`, data)
      // .pipe(tap((x: IUser) => this.authService.updateCurrentUser(x)));
      .pipe(tap((x: IUser) => this.store.dispatch(update({ user: x }))));
  }

  ngOnDestroy(): void{}
}
