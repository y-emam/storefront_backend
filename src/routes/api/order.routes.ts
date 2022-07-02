import { Router } from 'express';
import { userOrders, completedOrders } from '../../controllers/order.controller';
import { authenticate } from '../../middleware/authenticate';

const orderRoutes = Router();

orderRoutes.get('/userOrders', authenticate, userOrders);

orderRoutes.get('/completedOrders', authenticate, completedOrders);

export default orderRoutes;
