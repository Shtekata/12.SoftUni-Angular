import { IBase } from './base';
import { IUser } from './user';
import { ITheme } from './theme';

export interface IPost extends IBase{
    likes: [];
    text: string;
    userId: IUser;
    themeId: ITheme;
}
