import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
// export class TestResolver implements Resolve<boolean> {
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
//     return of(true);
//   }
// }
export class TestResolver implements Resolve<Observable<any>>{
  constructor(private http: HttpClient) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<any> |
    Observable<Observable<any>> |
    Promise<Observable<any>> {
    return this.http.get('http://jsonplaceholder.typicode.com/users/1');
  }
}
