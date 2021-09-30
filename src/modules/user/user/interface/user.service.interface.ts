import { UserDto } from "../dto/user.dto";

export interface UserServiceInterface {
    createUser(user: UserDto) : Promise<UserDto>;

    findUserByUserName(username: string) : Promise<UserDto[]>;
}