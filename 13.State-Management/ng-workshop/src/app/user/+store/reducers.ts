import { createReducer, on } from "@ngrx/store";
import {
    userLoginSetErrorMessage, userLoginSetLoading, userProfileSetEditMode,
    userProfileSetErrorMessage, userProfileSetLoading, userRegisterSetErrorMessage, userRegisterSetLoading
} from "./actions";

export interface ILoginState{
    isLoading: boolean;
    errorMessage: string | null;
}
export const initialLoginState: ILoginState = {
    isLoading: false,
    errorMessage: null
};
export const loginReducer = createReducer<ILoginState>(
    initialLoginState,
    on(userLoginSetLoading, (state, action) => { return { ...state, isLoading: action.isLoading } }),
    on(userLoginSetErrorMessage, (state, action) => { return { ...state, errorMessage: action.message } }),
);

export interface IRegisterState{
    isLoading: boolean;
    errorMessage: string | null;
}
export const initialRegisterState: IRegisterState = {
    isLoading: false,
    errorMessage: null
};
export const registerReducer = createReducer<IRegisterState>(
    initialRegisterState,
    on(userRegisterSetLoading, (state, action) => { return { ...state, isLoading: action.isLoading } }),
    on(userRegisterSetErrorMessage, (state, action) => { return { ...state, errorMessage: action.message } })
);

export interface IProfileState{
    isLoading: boolean;
    errorMessage: string | null;
    isEditMode: boolean;
}
export const initialProfileState: IProfileState = {
    isLoading: false,
    errorMessage: null,
    isEditMode: false
};
export const profileReducer = createReducer<IProfileState>(
    initialProfileState,
    on(userProfileSetLoading, (state, action) => { return { ...state, isLoading: action.isLoading } }),
    on(userProfileSetErrorMessage, (state, action) => {
        const isLoading = action.message === '' ? state.isLoading : false;
        return { ...state, errorMessage: action.message, isLoading }
    }),
    on(userProfileSetEditMode, (state, action) => {
        const isLoading = action.isEdit ? state.isLoading : false;
        return { ...state, isEditMode: action.isEdit, isLoading }
    })
);