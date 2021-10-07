import { ConnectionOptions } from 'typeorm';

const isProduction = process.env.NODE_ENV === 'production';

export function databaseEnvironment(): ConnectionOptions {
    return {
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        database: process.env.DATABASE_DATABASE,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        synchronize: process.env.DATABASE_SYNCHRONIZE === "Yes",
        dropSchema: process.env.DATABASE_DROP_SCHEMA === "Yes",
        migrationsRun: process.env.DATABASE_MIGRATIONS_RUN === "Yes",
        logging: process.env.DATABASE_LOGGING === "Yes",
        // entities: [
        //     ... (!isProduction ? ['src/**/entity/*.entity.ts)'] : ['dist/**/entity/*.entity.js'])
        // ],
        // migrationsTableName: process.env.DATABASE_MIGRATIONS_TABLE_NAME,
        // migrations: [
        //     ... (!isProduction ? ['src/database/migrations/*.ts)'] : ['dist/database/migrations/*.js'])
        // ],
        // cli: {
        //     entitiesDir: process.env.DATABASE_ENTITIES_DIR,
        //     migrationsDir: process.env.DATABASE_MIGRATIONS_DIR
        // },
        entities: ['dist/**/entity/*.entity.js'],
        migrationsTableName: process.env.DATABASE_MIGRATIONS_TABLE_NAME,
        migrations: ['dist/database/migrations/*.js'],
        cli: {
            migrationsDir: 'src/database/migrations'
        },
    };
}
