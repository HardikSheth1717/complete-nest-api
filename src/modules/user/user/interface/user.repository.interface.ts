import { BaseRepositoryInterface } from '../../../../core/repositories/base/interface/base.repository.interface';
import { User } from '../entity/user.entity';

export type PersonRepositoryInterface = BaseRepositoryInterface<User>;
