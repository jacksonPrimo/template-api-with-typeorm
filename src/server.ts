import dotenv from 'dotenv';
import { App } from './app';
import 'reflect-metadata';

dotenv.config();

const app = new App(+process.env.PORT || 3000);
app.createServer();
