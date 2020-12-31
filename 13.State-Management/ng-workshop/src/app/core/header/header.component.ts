import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, throttleTime } from 'rxjs/operators';
import { ErrorService } from 'src/app/shared/error.service';
import { IUser } from 'src/app/shared/interfaces';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  hideNavigation = false;
  subscription: Subscription;

  // get isLogged(): boolean{
  //   return this.authService.isLogged;
  // }
  isLogged$ = this.authService.isLogged$;
  isReady$ = this.authService.isReady$;

  // get user(): IUser | null{
  //   return this.authService.currentUser;
  // }
  currentUser$ = this.authService.currentUser$;

  get errorInfoMessage(): string{
    return this.errorService.errorInfoMessage;
  }

  get errorStrongMessage(): string{
    return this.errorService.errorStrongMessage;
  }

  constructor(private authService: AuthService,
              // router: ActivatedRoute,
    private router: Router,
    title: Title,
    private errorService: ErrorService
  ) {
    // router.data.subscribe(x => console.log(x));
    this.subscription = router.events
      .pipe(filter(x => x instanceof ActivationEnd), throttleTime(0)).subscribe((x: ActivationEnd) => {
        this.hideNavigation = !!x.snapshot.data?.noNavigation;
        title.setTitle(x.snapshot.data?.title);
      });
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  // loginHandler(): void{
  //   this.authService.login({});
  // }

  logoutHandler(): void{
    this.authService.logout().subscribe(() => this.router.navigate(['/']));
  }

}
