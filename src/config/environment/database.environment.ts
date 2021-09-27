import { ConnectionOptions } from "typeorm";

export function databaseEnvironment(): any {
    return {
        type: process.env.TYPEORM_CONNECTION,
        host: process.env.TYPEORM_HOST,
        port: parseInt(process.env.TYPEORM_PORT),
        database: process.env.TYPEORM_DATABASE,
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        synchronize: process.env.TYPEORM_SYNCHRONIZE,
        dropSchema: process.env.TYPEORM_DROP_SCHEMA,
        migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN,
        logging: process.env.TYPEORM_LOGGING,
        entities: process.env.TYPEORM_ENTITIES,
        migrationsTableName: process.env.TYPEORM_MIGRATIONS_TABLE_NAME,
        migrations: process.env.TYPEORM_MIGRATIONS,
        cli: {
            migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR
        }
    }
}