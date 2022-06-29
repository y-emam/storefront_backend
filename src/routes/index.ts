import { Request, Response, Router } from 'express';
import userRoutes from './api/user.routes'

const routes = Router();

routes.use('/user', userRoutes);

export default routes;
