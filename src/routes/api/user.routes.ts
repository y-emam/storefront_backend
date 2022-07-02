import { Router } from 'express';
import { index, show, create } from '../../controllers/user.controller'
import { authenticate } from '../../middleware/authenticate';


const userRoutes = Router();

userRoutes.get('/', authenticate, index);


userRoutes.post('/show', authenticate, show);


userRoutes.post('/create', create);

export default userRoutes;
