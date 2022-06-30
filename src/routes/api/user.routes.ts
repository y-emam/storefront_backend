import { Router } from 'express';
import { index, show, create } from '../../controllers/user.controller'


const userRoutes = Router();

userRoutes.post('/', index);


userRoutes.post('/show', show);


userRoutes.route('/create').post(create);

export default userRoutes;
