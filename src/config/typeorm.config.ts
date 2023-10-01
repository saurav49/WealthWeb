import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DB_CONFIG } from 'src/constants/envs';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export default registerAs('typeorm', (): TypeOrmModuleOptions => {
  const isDev = process.env.NODE_ENV === 'development';
  return {
    type: process.env[DB_CONFIG.DB_TYPE],
    host: process.env[DB_CONFIG.DB_HOST],
    port: +process.env[DB_CONFIG.DB_PORT],
    username: process.env[DB_CONFIG.DB_USER],
    password: process.env[DB_CONFIG.DB_PASSWORD],
    database: process.env[DB_CONFIG.DB_DATABASE],
    entities: [__dirname + '/../**/entities/*.entity.{js,ts}'],
    synchronize: isDev ? true : false,
  } as PostgresConnectionOptions;
});
