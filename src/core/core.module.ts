import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import commonEnvironemnt from '../config/environment/common.environment';
import { validationSchema } from '../config/validationschema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseEnvironment } from 'src/config/environment/database.environment';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: !process.env.NODE_ENV
        ? '.env'
        : `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
      load: [commonEnvironemnt, databaseEnvironment],
      validationSchema: validationSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
      cache: true,
    }),
    TypeOrmModule.forRoot(databaseEnvironment()),
  ],
  controllers: [],
  providers: [],
})
export class CoreModule {
  constructor() {}
}
