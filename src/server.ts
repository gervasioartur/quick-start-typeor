import 'dotenv';
import 'reflect-metadata'
import app from './app';

const port = process.env.PORT;

app.listen(port, () => {
  console.log('Servidor rondando!');
});
