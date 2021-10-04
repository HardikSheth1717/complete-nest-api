export const AUTHSERVICETOKEN = 'AuthServiceInterface';

export interface AuthServiceInterface {
  getUser(username: string, password: string): Promise<any>;

  login(user: any): { access_token: string };
}
