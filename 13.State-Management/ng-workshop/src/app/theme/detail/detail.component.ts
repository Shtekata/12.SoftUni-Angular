import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
import { IPost, ITheme } from 'src/app/shared/interfaces';
import { IThemeModuleState } from '../+store';
import { themeDetailClearTheme, themeDetailSetIsLoading, themeDetailSetTheme } from '../+store/actions';
// import { UserService } from 'src/app/user/user.service';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, DoCheck, OnDestroy {

  isLogged$ = this.authService.isLogged$;
  currentUser$ = this.authService.currentUser$;
  // theme: ITheme<IPost, string> = null;
  theme$: Observable<ITheme<IPost, string>> = this.store.select(x => x.theme.detail.theme);
  isLoading$: Observable<boolean> = this.store.select(x => x.theme.detail.isLoading);

  constructor(
    // private userService: UserService,
    themeService: ThemeService,
    activatedRoot: ActivatedRoute,
    private authService: AuthService,
    private store: Store<IThemeModuleState>
  )
  {
    const id = activatedRoot.snapshot.params.id;
    // themeService.loadTheme(id).subscribe(x => this.theme = x);
    
    this.store.dispatch(themeDetailSetIsLoading({ isLoading: true }));
    themeService.loadTheme(id).subscribe(x => this.store.dispatch(themeDetailSetTheme({ theme: x })));
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void{
    // this.isLogged = this.userService.isLogged;
  }

  ngOnDestroy(): void{
    this.store.dispatch(themeDetailClearTheme());
  }
}
