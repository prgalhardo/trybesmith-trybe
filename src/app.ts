import express from 'express';
import usersRoutes from '../routes/users.routes';
import productsRoutes from '../routes/products.routes';

const app = express();

app.use(express.json());
app.use(usersRoutes);
app.use(productsRoutes);

export default app;
