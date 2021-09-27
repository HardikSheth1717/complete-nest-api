import { ConnectionOptions } from "typeorm";

function databaseEnvironment(): any {
    return {
        type: "mysql",
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        synchronize: process.env.MIGRATION_TYPE === 'SYNC',
        dropSchema: process.env.MIGRATION_TYPE === 'SYNC',
        migrationsRun: !(process.env.MIGRATION_TYPE === 'SYNC'),
        logging: false,
        connectTimeout: parseInt(process.env.DATABASE_CONNECTION_TIMEOUT),
        entities: process.env.NODE_ENV === 'production' ? [
            "dist/**/entity/*.entity.js"
        ] : [
            "src/**/entity/*.entity.ts"
        ],
        migrationsTableName: "migration_logs",
        migrations: process.env.NODE_ENV === 'production' ? [
            "dist/database/migrations/*.js"
        ] : [
            "src/database/migrations/*.ts"
        ],
        cli: {
            migrationsDir: "src/database/migrations"
        }
    }
}

const ormConfig: ConnectionOptions = {
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    synchronize: process.env.MIGRATION_TYPE === 'SYNC',
    dropSchema: process.env.MIGRATION_TYPE === 'SYNC',
    migrationsRun: !(process.env.MIGRATION_TYPE === 'SYNC'),
    logging: false,
    connectTimeout: parseInt(process.env.DATABASE_CONNECTION_TIMEOUT),
    entities: process.env.NODE_ENV === 'production' ? [
        "dist/**/entity/*.entity.js"
    ] : [
        "src/**/entity/*.entity.ts"
    ],
    migrationsTableName: "migration_logs",
    migrations: process.env.NODE_ENV === 'production' ? [
        "dist/database/migrations/*.js"
    ] : [
        "src/database/migrations/*.ts"
    ],
    cli: {
        migrationsDir: "src/database/migrations"
    }
}

export = databaseEnvironment;