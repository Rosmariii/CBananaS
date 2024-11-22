import 'reflect-metadata';
import { DataSource } from 'node_modules/typeorm/index';
import { User } from '@src/user/domain/entities/user.entity';
import { Session } from '@src/session/domain/entities/session.entities';
process.loadEnvFile();

export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  schema: 'public',
  synchronize: true,
  logging: true,
  entities: [User, Session],
  subscribers: [],
  migrations: [],
});
