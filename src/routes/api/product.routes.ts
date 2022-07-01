import { Router } from 'express';
import { index, show, create, top5, category } from '../../controllers/product.controller';
import { authenticate } from '../../middleware/authenticate';

const productRoutes = Router();

productRoutes.get('/', index);

productRoutes.get('/show', show);

productRoutes.post('/create', authenticate, create);

productRoutes.post('/top5', top5);

productRoutes.get('/category', category);

export default productRoutes;
