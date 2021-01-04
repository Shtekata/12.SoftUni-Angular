import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { IPost, ITheme } from "src/app/shared/interfaces";
import {
    themeClearPostList,
    themeDetailClearTheme,
    themeDetailLoadThemeDetail,
    themeDetailLoadThemeDetailError,
    themeDetailSetIsLoading,
    themeDetailSetTheme,
    themeListClearThemeList,
    themeListLoadThemeList,
    themeListLoadThemeListError,
    themeListSetIsLoading,
    themeListSetThemeList,
    themeLoadPostList,
    themeLoadPostListError,
    themeSetIsLoading,
    themeSetPostList
} from "./actions";

export interface IThemeDetailState{
    theme: ITheme<IPost, string> | null;
    isLoading: boolean;
    errorMessage: string;
}
export const initialThemeDetailState: IThemeDetailState = {
    theme: null,
    isLoading: false,
    errorMessage: ''
};
export const themeDetailReducer = createReducer<IThemeDetailState>(
    initialThemeDetailState,
    on(themeDetailSetTheme, (state, action) => { return { ...state, theme: action.theme, isLoading: false } }),
    on(themeDetailSetIsLoading, (state, action) => { return { ...state, isLoading: action.isLoading } }),
    on(themeDetailClearTheme, () => initialThemeDetailState),
    on(themeDetailLoadThemeDetail, (state) => { return { ...state, isLoading: true } }),
    on(themeDetailLoadThemeDetailError, (state, action) => { return { ...state, errorMessage: action.error } })
);

export interface IThemeListState{
    themeList: ITheme[] | null;
    isLoading: boolean;
    errorMessage: string;
}
export const initialThemeListState: IThemeListState = {
    themeList: null,
    isLoading: false,
    errorMessage: ''
};
export const themeListReducer = createReducer<IThemeListState>(
    initialThemeListState,
    on(themeListSetThemeList, (state, action) => { return { ...state, themeList: action.themeList, isLoading: false } }),
    on(themeListSetIsLoading, (state, action) => { return { ...state, isLoading: action.isLoading } }),
    on(themeListClearThemeList, () => initialThemeListState),
    on(themeListLoadThemeList, (state) => { return { ...state, isLoading: true } }),
    on(themeListLoadThemeListError, (state, action) => { return { ...state, errorMessage: action.error } })
);

export interface IPostListState{
    postList: IPost[] | null;
    isLoading: boolean;
    errorMessage: string;
}
export const initialPostListState: IPostListState = {
    postList: null,
    isLoading: false,
    errorMessage: ''
};
export const postListReducer = createReducer<IPostListState>(
    initialPostListState,
    on(themeSetPostList, (state, action) => { return { ...state, postList: action.postList, isLoading: false } }),
    on(themeSetIsLoading, (state, action) => { return { ...state, isLoading: action.isLoading } }),
    on(themeClearPostList, () => initialPostListState),
    on(themeLoadPostList, (state) => { return { ...state, isLoading: true } }),
    on(themeLoadPostListError, (state, action) => { return { ...state, errorMessage: action.error } })
);
//const isLoading = state.postList !== null ? false : state.isLoading;
//const isLoadimg = state.themeList !== null ? false : state.isLoading;