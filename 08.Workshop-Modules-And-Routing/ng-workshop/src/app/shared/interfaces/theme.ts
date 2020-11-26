import { IBase } from './base';
import { IUser } from './user';

export interface ITheme<T= string, TT= IUser> extends IBase{
    subscribers: string[];
    posts: T[];
    themeName: string;
    userId: TT;
}
