export interface IUserToken {
    id: string,
    name: string,
    email: string,
    lastName?:string,
    roles: string[]
}