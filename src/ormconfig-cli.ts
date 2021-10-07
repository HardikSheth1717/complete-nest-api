/**
 * This re-exporting of OrmConfig is to satisfy a missing feature/bug in TypeOrm wherein it requires a CommonJS style default export (module.exports=? / export=?) for its CLI to work properly
 */

import { databaseEnvironment } from './config/environment/database.environment';

const ormConfig = databaseEnvironment();

export = ormConfig;