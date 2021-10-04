import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseAbstractRepository } from '../../../../core/repositories/base/base.abstract.repository';
import { PersonRepositoryInterface } from '../interface/user.repository.interface';

import { User } from '../entity/user.entity';

@Injectable()
export class PersonRepository
  extends BaseAbstractRepository<User>
  implements PersonRepositoryInterface
{
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }
}
