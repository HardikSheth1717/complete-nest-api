import { Inject, Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserDto } from './dto/user.dto';
import { PersonRepositoryInterface } from './interface/user.repository.interface';
import { UserServiceInterface } from './interface/user.service.interface';

@Injectable()
export class UserService implements UserServiceInterface {
    constructor(
        @Inject('PersonRepositoryInterface')
        private readonly userRepository: PersonRepositoryInterface
    ) {}
    
    findUserByUserName(username: string): Promise<UserDto> {
        const userEntities: Promise<User[]> =  this.userRepository.filter({
            UserName: username
        });

        const users: Promise<UserDto[]> = <Promise<UserDto[]>>userEntities;
        return users[0];
    }

    async createUser(user: UserDto) : Promise<UserDto> {
        const userEntity: User = new User();
        userEntity.UserId = user.UserId;
        userEntity.FirstName = user.FirstName;
        userEntity.LastName = user.LastName;
        userEntity.Email = user.Email;
        userEntity.Mobile = user.Mobile;
        userEntity.Password = user.Password;
        userEntity.IsActive = user.IsActive;
        userEntity.IsSystem = user.IsSystem;
        userEntity.ProfileImage = user.ProfileImage;
        userEntity.CreatedBy = user.CreatedBy;
        userEntity.CreatedDate = user.CreatedDate;
        userEntity.ModifiedBy = user.ModifiedBy;
        userEntity.ModifiedDate = user.ModifiedDate;
        userEntity.CompanyId = user.CompanyId;

        const userResult: Promise<UserDto> = <Promise<UserDto>>this.userRepository.save(userEntity);
        return userResult;
    }
}