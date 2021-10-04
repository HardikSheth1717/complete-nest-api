import { Inject, Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserDto } from './dto/user.dto';
import { PersonRepositoryInterface } from './interface/user.repository.interface';
import { UserServiceInterface } from './interface/user.service.interface';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @Inject('PersonRepositoryInterface')
    private readonly userRepository: PersonRepositoryInterface,
  ) {}

  findUserByUserName(username: string): Promise<UserDto> {
    const userEntities: Promise<User> = this.userRepository.findByCondition({
      where: {
        mobile: username,
      },
    });

    const user: Promise<UserDto> = <Promise<UserDto>>userEntities;

    return user;
  }

  async createUser(user: UserDto): Promise<UserDto> {
    const userEntity: User = new User();
    userEntity.userId = user.userId;
    userEntity.firstName = user.firstName;
    userEntity.lastName = user.lastName;
    userEntity.email = user.email;
    userEntity.mobile = user.mobile;
    userEntity.password = user.password;
    userEntity.isActive = user.isActive;
    userEntity.isSystem = user.isSystem;
    userEntity.profileImage = user.profileImage;
    userEntity.createdBy = user.createdBy;
    userEntity.createdDate = user.createdDate;
    userEntity.modifiedBy = user.modifiedBy;
    userEntity.modifiedDate = user.modifiedDate;
    userEntity.companyId = user.companyId;

    const userResult: Promise<UserDto> = <Promise<UserDto>>(
      this.userRepository.save(userEntity)
    );
    return userResult;
  }
}
