import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { Routes } from './routes';

export class App {
  constructor(private port: number) {
    this.port = port;
  }

  public async createServer() {
    const app = express();
    await createConnection();
    app.use(cors({ origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN : '*' }));
    app.use(new Routes().router);
    app.listen(this.port, () => console.log(`👾 api running in port ==> ${this.port}`));
  }
}
