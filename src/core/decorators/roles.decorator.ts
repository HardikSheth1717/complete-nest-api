import { SetMetadata } from '@nestjs/common';
import { ROLES_KEY } from '../../constant/constant';
import { Role } from '../../constant/enums/role.enum';

export const roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
