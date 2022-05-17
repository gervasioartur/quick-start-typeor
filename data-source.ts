import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Category } from './src/entities/Category.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  logging: false,
  synchronize: true,
  entities: ['./src/entities/*.entity{.ts,.js}'],
  migrations: ['./src/database/migrations/**/*.ts'],
  subscribers: ['./src/app/subcriber/**/*.ts'],
});
