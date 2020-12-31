import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
import { PostService } from 'src/app/post/post.service';
import { IPost } from 'src/app/shared/interfaces';
import { IThemeModuleState } from '../+store';
import { themeClearPostList, themeLoadPostList, themeSetIsLoading, themeSetPostList } from '../+store/actions';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit, DoCheck, OnDestroy {

  // isLogged = false;
  isLogged$ = this.authService.isLogged$;
  // postList: IPost[];
  postList$: Observable<IPost[]> = this.store.select(x => x.theme.postList.postList);
  isLoading$: Observable<boolean> = this.store.select(x => x.theme.postList.isLoading);

  constructor(
    private authService: AuthService,
    private postService: PostService,
    private store: Store<IThemeModuleState>
  ) { 
    // this.postService.loadPostList(5).subscribe(x => { this.postList = x; });

    // this.store.dispatch(themeSetIsLoading({ isLoading: true }));
    // this.postService.loadPostList(5).subscribe(x => this.store.dispatch(themeSetPostList({ postList: x })));
    this.store.dispatch(themeLoadPostList());
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void{
    // this.isLogged = this.authService.isLogged;
  }

  ngOnDestroy(): void{
    this.store.dispatch(themeClearPostList());
  }
}
