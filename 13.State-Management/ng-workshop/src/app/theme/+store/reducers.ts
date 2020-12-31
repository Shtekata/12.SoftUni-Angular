import { createReducer, on } from "@ngrx/store";
import { IPost, ITheme } from "src/app/shared/interfaces";
import {
    themeClearPostList,
    themeDetailClearTheme,
    themeDetailSetIsLoading,
    themeDetailSetTheme,
    themeListClearThemeList,
    themeListLoadThemeList,
    themeListSetIsLoading,
    themeListSetThemeList,
    themeLoadPostList,
    themeSetIsLoading,
    themeSetPostList
} from "./actions";

export interface IThemeDetailState{
    theme: ITheme<IPost, string> | null;
    isLoading: boolean;
}
export const initialThemeDetailState: IThemeDetailState = {
    theme: null,
    isLoading: false
};
export const themeDetailReducer = createReducer<IThemeDetailState>(
    initialThemeDetailState,
    on(themeDetailSetTheme, (state, action) => { return { ...state, theme: action.theme } }),
    on(themeDetailSetIsLoading, (state, action) => { return { ...state, isLoading: action.isLoading } }),
    on(themeDetailClearTheme, () => initialThemeDetailState)
);

export interface IThemeListState{
    themeList: ITheme[] | null;
    isLoading: boolean;
}
export const initialThemeListState: IThemeListState = {
    themeList: null,
    isLoading: false
};
export const themeListReducer = createReducer<IThemeListState>(
    initialThemeListState,
    on(themeListSetThemeList, (state, action) => { return { ...state, themeList: action.themeList, isLoading: false } }),
    on(themeListSetIsLoading, (state, action) => { return { ...state, isLoading: action.isLoading } }),
    on(themeListClearThemeList, () => initialThemeListState),
    on(themeListLoadThemeList, (state) => { return { ...state, isLoading: true } })
);

export interface IPostListState{
    postList: IPost[] | null;
    isLoading: boolean;
}
export const initialPostListState: IPostListState = {
    postList: null,
    isLoading: false
};
export const postListReducer = createReducer<IPostListState>(
    initialPostListState,
    on(themeSetPostList, (state, action) => { return { ...state, postList: action.postList, isLoading: false } }),
    on(themeSetIsLoading, (state, action) => { return { ...state, isLoading: action.isLoading } }),
    on(themeClearPostList, () => initialPostListState),
    on(themeLoadPostList, (state) => { return { ...state, isLoading: true } })
);
//const isLoading = state.postList !== null ? false : state.isLoading;
//const isLoadimg = state.themeList !== null ? false : state.isLoading;