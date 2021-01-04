import { createAction, props } from '@ngrx/store';
import { IPost, ITheme } from 'src/app/shared/interfaces';

const themeDetailNamespace = '[THEME DETAIL]';
export const themeDetailSetTheme = createAction(`${themeDetailNamespace} Set Theme`, props<{ theme: ITheme<IPost, string> }>());
export const themeDetailSetIsLoading = createAction(`${themeDetailNamespace} Set Is Loading`, props<{ isLoading: boolean }>());
export const themeDetailClearTheme = createAction(`${themeDetailNamespace} Clear`);
export const themeDetailLoadThemeDetail = createAction(`${themeDetailNamespace} Load Theme Detail`, props<{ id: string }>());
export const themeDetailLoadThemeDetailError = createAction(`${themeDetailNamespace} Load Theme Detail Error`, props<{ error: string }>());

const themeListNamespace = '[THEME LIST]';
export const themeListSetThemeList = createAction(`${themeListNamespace} Set Theme List`, props<{ themeList: ITheme[] }>());
export const themeListSetIsLoading = createAction(`${themeListNamespace} Set Is Loading`, props<{ isLoading: boolean }>());
export const themeListClearThemeList = createAction(`${themeListNamespace} Clear`);
export const themeListLoadThemeList = createAction(`${themeListNamespace} Load Theme List`);
export const themeListLoadThemeListError = createAction(`${themeListNamespace} Load Theme List Error`, props<{ error: string }>());

const postListNamespace = '[THEME]';
export const themeSetPostList = createAction(`${postListNamespace} Set Post List`, props<{ postList: IPost[] }>());
export const themeSetIsLoading = createAction(`${postListNamespace} Set Is Loading`, props<{ isLoading: boolean }>());
export const themeClearPostList = createAction(`${postListNamespace} Clear`);
export const themeLoadPostList = createAction(`${postListNamespace} Load Post List`);
export const themeLoadPostListError = createAction(`${postListNamespace} Load Post List Error`, props<{ error: string }>());