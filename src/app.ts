import express, { Application, Request, Response } from 'express';
import { productRoute } from './app/module/products/products.route';
import cors from 'cors';

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application route
app.use('/api/products', productRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from setup file');
});

export default app;
