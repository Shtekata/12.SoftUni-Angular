import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AccessGuard implements CanActivate, CanLoad {
  // constructor(private router: Router, authService: ...){}
  constructor(private router: Router){}
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return true;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // const isUserLogged = this.authService.isLogged;
    const routerIsLogged = route.data.isLogged;
    // const result = routerIsLogged ? isUserLogged : true;
    let result = routerIsLogged;
    if (result) {
      this.router.navigateByUrl(this.router.url === 'about' ? '/' : this.router.url);
    } else result = true;
    return result;
  }
}
