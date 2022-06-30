import express,  { Request, Response, Router } from 'express';
import userRoutes from './api/user.routes'
import productRoutes from './api/product.routes';
import orderRoutes from './api/order.routes';

const routes = express.Router();

routes.use('/user', userRoutes);
routes.use('/product', productRoutes);
routes.use('/order', orderRoutes);

export default routes;
