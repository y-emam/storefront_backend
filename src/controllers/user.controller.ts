import userModle from '../models/user';
import { Request, Response } from 'express';

const index = (req: Request, res: Response) => {
    res.send('Fuck you');
}


export default {
    index
} 