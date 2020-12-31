import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PostService } from 'src/app/post/post.service';
import { ThemeService } from '../theme.service';
import { themeListLoadThemeList, themeListLoadThemeListError, themeListSetThemeList, themeLoadPostList, themeLoadPostListError, themeSetPostList } from './actions';

@Injectable()
export class ThemeListEffects{
    constructor(
        private actions$: Actions,
        private themeService: ThemeService,
        private postService: PostService
    ) { }

    loadThemeList$ = createEffect(() => this.actions$.pipe(
        ofType(themeListLoadThemeList),
        switchMap(() => this.themeService.loadThemeList().pipe(catchError((err) => [new Error(err)]))),
        map(
            x => x instanceof Error ?
                themeListLoadThemeListError({ error: x.message }) : themeListSetThemeList({ themeList: x }))
    ));

    loadPostList$ = createEffect(() => this.actions$.pipe(
        ofType(themeLoadPostList),
        switchMap(() => this.postService.loadPostList().pipe(catchError((err) => [new Error(err)]))),
        map(
            x => x instanceof Error ?
                themeLoadPostListError({ error: x.message }) : themeSetPostList({ postList: x }))
    ));
}