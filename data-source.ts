import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  logging: false,
  entities: ['./src/app/models/**/*.ts'],
  migrations: ['./src/database/migrations/**/*.ts'],
  subscribers: ['./src/app/subcriber/**/*.ts'],
});
