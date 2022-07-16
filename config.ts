import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export const serverConfig = {
   port: parseInt(process.env.SERVER_PORT),
};

export const typeORMConfig: TypeOrmModuleOptions = {
   type: process.env.DB_TYPE === 'mariadb' ? 'mariadb' : 'mysql',
   host: process.env.DB_HOST,
   port: parseInt(process.env.DB_PORT),
   username: process.env.DB_USERNAME,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_DATABASE,
   entities: ['dist/**/*.entity.js'],
   synchronize: process.env.DB_SYNCHRONIZE === 'true' ? true : false,
};

export const configs = {
   typeORMConfig,
   serverConfig,
};

export default configs;
