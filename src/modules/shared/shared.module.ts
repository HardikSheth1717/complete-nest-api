import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user/entity/user.entity';

import { PERSONREPOSITORYTOKEN } from '../user/user/interface/user.repository.interface';
import { USERSERVICETOKEN } from '../user/user/interface/user.service.interface';
import { PersonRepository } from '../user/user/repository/user.repository';
import { UserService } from '../user/user/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [
        {
            provide: PERSONREPOSITORYTOKEN,
            useClass: PersonRepository,
        },
        {
            provide: USERSERVICETOKEN,
            useClass: UserService,
        }
    ],
    exports: [
        TypeOrmModule,
        {
            provide: PERSONREPOSITORYTOKEN,
            useClass: PersonRepository,
        },
        {
            provide: USERSERVICETOKEN,
            useClass: UserService,
        }
    ]
})
export class SharedModule {

}