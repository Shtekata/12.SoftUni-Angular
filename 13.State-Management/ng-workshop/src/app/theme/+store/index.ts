import { ActionReducerMap } from "@ngrx/store";
import { IRootState } from "src/app/+store";
import { IPostListState, IThemeDetailState, IThemeListState, postListReducer, themeDetailReducer, themeListReducer } from "./reducers";

export interface IThemeState{
    readonly detail: IThemeDetailState;
    readonly themeList: IThemeListState;
    readonly postList: IPostListState;
}

export interface IThemeModuleState extends IRootState{
    theme: IThemeState;
}

export const reducers: ActionReducerMap<IThemeState> = {
    detail: themeDetailReducer,
    themeList: themeListReducer,
    postList: postListReducer
};