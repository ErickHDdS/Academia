import express, {
  json
} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connection } from './config/index.js';
import routes from './routes/index.js';
import errorHandler from './error/errorHandler.js';

const server = express();

server.use(json());
server.use(cors());
server.use(cookieParser());

server.use('/api', routes);

const { PORT } = process.env;
server.listen(PORT, async () => {
  // FIXME check how it is doing, this is running sql queries in DB
  await connection.sync({ logging: false });
  console.log(`Server Ready in http://localhost:${PORT}`);
});

server.use(errorHandler);
