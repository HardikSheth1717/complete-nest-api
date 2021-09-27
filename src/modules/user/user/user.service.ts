import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

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