import { HttpClient, HttpEvent } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { fromEvent, Observable, of, pipe } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap, tap } from 'rxjs/operators';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('filter', { static: true }) searchInput: ElementRef;

  // @ViewChild(RouterOutlet) outlet: RouterOutlet;

  // constructor(router: Router) {
  //   router.events.pipe(filter(x => x instanceof NavigationEnd)).subscribe(() => {
  //     const c = this.outlet.component;
  //   });
  // }

  isReady$ = this.authService.isReady$;

  users$: Observable<any[]>;
  
  apiURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private authService: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    
    this.users$ = fromEvent<KeyboardEvent>(this.searchInput.nativeElement, 'keyup').pipe(
      map(x => (x.target as HTMLInputElement).value),
      debounceTime(1000),
      startWith(''),
      distinctUntilChanged(),
      switchMap((x: string) => {
        let url = this.apiURL;
        if (x) { url += `?username_like=${x}`; }
        return this.http.get<any[]>(url);
      })
    );
    console.log(this.searchInput.nativeElement);
  }
}
