import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import userType from '../types/user.type';
import UserModel from '../models/user.model';

const userObject = new UserModel();

export const index = (req: Request, res: Response, next: NextFunction) => {
    res.send('index function');
}

export const show = (req: Request, res: Response, next: NextFunction) => {

}

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;

        if (data.first_name !== '' && typeof data.first_name === 'string' &&
            data.last_name !== '' && typeof data.last_name === 'string' && 
            data.password !== '' && typeof data.password === 'string') {
            const user = await userObject.create(data);

            if (typeof user === 'string') {
                res.json({
                    status: 'error',
                    message: `faield to create new user: ${user}`
                });
            } else {
                const token = jwt.sign({ user }, config.token as unknown as string);
                res.json({
                    status: 'success',
                    token: token
                });
            }

        } else {
            res.status(400);
            res.send('Error: please input correct values');
        }       
        
    } catch (error) {
        return next(error);
    }
}