import { Component, DoCheck, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';
import { StorageService } from '../core/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {

  // get isLogged(): boolean {
  //   return this.storage.getItem('isLogged');
  // }

  // isLogged = false;
  isLogged$ = this.authService.isLogged$;
  url: string;

  constructor(private storage: StorageService, private authService: AuthService, router: Router) {
    // router.events.pipe(filter(x => x instanceof NavigationEnd)).subscribe((x: NavigationEnd) => {
    //   console.log(x.url);
    //   this.url = x.url;
    // });
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    // this.isLogged = this.authService.isLogged;
  }
}
