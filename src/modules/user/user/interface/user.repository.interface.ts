import { BaseRepositoryInterface } from '../../../../core/repositories/base/interface/base.repository.interface';
import { User } from '../entity/user.entity';

export const PERSONREPOSITORYTOKEN = 'PersonRepositoryInterface';

export type PersonRepositoryInterface = BaseRepositoryInterface<User>;
