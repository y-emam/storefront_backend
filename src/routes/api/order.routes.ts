import { Router } from 'express';
import { userOrders, completedOrders } from '../../controllers/order.controller';
import { authenticate } from '../../middleware/authenticate';

const orderRoutes = Router();

orderRoutes.get('/user', authenticate, userOrders);

orderRoutes.get('/completed', authenticate, completedOrders);

export default orderRoutes;
