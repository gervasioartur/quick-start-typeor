import 'dotenv/config';
import 'reflect-metadata';
import * as express from 'express';
import { routes } from './routes';
import { AppDataSource } from '../data-source';

AppDataSource.initialize()
const app = express();
app.use(express.json());
app.use(routes);
const port = process.env.PORT;

app.listen(port, () => {
  console.log('Servidor rondando! ' + `http://localhost:${port}`);
});
