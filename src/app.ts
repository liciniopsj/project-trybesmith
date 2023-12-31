import express from 'express';
import productsRouter from './routes/products.routes';
import ordersRouter from './routes/orders.routes';
import usersRouter from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/users', usersRouter);

export default app;
