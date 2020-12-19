export interface IUser{
    id: string;
    username: string;
    name: string;
    email: string;
    address: {
        street: string;
    }
}