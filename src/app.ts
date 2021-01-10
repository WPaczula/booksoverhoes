import express, { Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { Server } from 'http';
import {errorHandler, notFound } from './middleware';

const makeServer = async (): Promise<Server> => {
  const app = express();

  // apply middlewares
  app.use(express.json());
  app.use(morgan('common'));
  app.use(helmet());
  app.use(cors());

  // add routes
  app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello world' });
  });

  app.use(notFound);
  app.use(errorHandler);

  const host = 'localhost';
  const port = 3000;
  const server = app.listen(port, host, () => {
    console.log(`>>> SERVER RUNNING ON http://${host}:${port} <<<`);
  });

  return server;
};

export default makeServer;