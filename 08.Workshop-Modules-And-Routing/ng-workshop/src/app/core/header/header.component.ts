import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, throttleTime } from 'rxjs/operators';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  hideNavigation = false;
  subscription: Subscription;

  get isLogged(): boolean{
    return this.userService.isLogged;
  }

  constructor(private userService: UserService,
              // router: ActivatedRoute,
              router: Router, title: Title
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

  loginHandler(): void{
    this.userService.login({});
  }

  logoutHandler(): void{
    this.userService.logout();
  }

}
