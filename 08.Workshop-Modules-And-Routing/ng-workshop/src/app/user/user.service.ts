import { Injectable, OnDestroy } from '@angular/core';
import { StorageService } from '../core/storage.service';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class UserService implements OnDestroy {

  isLogged = false;

  constructor(private storage: StorageService, private router: Router) {
    this.isLogged = this.storage.getItem('isLogged') || false;
  }

  login(data: any): Observable<any>{
    this.isLogged = true;
    this.storage.setItem('isLogged', true);
    return of(data).pipe(delay(3000));
  }

  logout(): Observable<any>{
    this.isLogged = false;
    this.storage.setItem('isLogged', false);
    this.router.navigate(['']);
    return of(null).pipe(delay(3000));
  }

  ngOnDestroy(): void{}
}
