export interface AuthServiceInterface {
    validateUser(username: string, password: string) : Promise<any>;

    login(user: any): Promise<any>;
}