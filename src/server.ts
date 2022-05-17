import 'dotenv/config';
import '../data-source';
import 'reflect-metadata';
import * as express from 'express';

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log('Servidor rondando!' + ` ${port}`);
});
