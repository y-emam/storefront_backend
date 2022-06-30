import { Router } from 'express';
import { index, show, create, top5, category } from '../../controllers/product.controller';

const productRoutes = Router();

productRoutes.get('/', index);

productRoutes.get('/show', show);

productRoutes.post('/create', create);

productRoutes.post('/top5', top5);

productRoutes.post('/category', category);

export default productRoutes;
