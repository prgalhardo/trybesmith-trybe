import express from 'express';
import usersRoutes from '../routes/users.routes';
import productsRoutes from '../routes/products.routes';
import ordersRoutes from '../routes/orders.routes';

const app = express();

app.use(express.json());
app.use(usersRoutes);
app.use(productsRoutes);
app.use(ordersRoutes);

export default app;
