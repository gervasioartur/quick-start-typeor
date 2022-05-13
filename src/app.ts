import * as express from 'express';
import { AppDataSource } from './config/data-source';

const app = express();
app.use(express.json());

export default app;
