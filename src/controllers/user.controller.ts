import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import userType from '../types/user.type';
import bcrypt from 'bcrypt';
import UserModel from '../models/user.model';

const UserObject = new UserModel();

export const index = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await UserObject.Index();
        
        if (users === 'string') {
            throw new Error(users);
        } else {
            res.json({
                status: 'success',
                data: users
            })
        }
    } catch (error) {
        console.log(`Error: failed to show all users: ${error}`);
        res.json({
            status: 'error',
            message: `Error: failed to show all users: ${error}`
        })
    }
}

export const show = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const first_name = req.query.first_name;
        const last_name = req.query.last_name;

        if (typeof first_name !== 'string' || first_name === ''
            || typeof last_name !== 'string' || last_name === '') {
            throw new Error('Invalid input: ' + first_name + ' ' + last_name);
        } else {
            const user = await UserObject.show(first_name.toLowerCase(), last_name.toLowerCase());

            if (typeof user === 'string') {
                throw new Error(user);
            } else {
                res.json({
                    status: 'success',
                    data: user
                })
            }
        }
        
    } catch (error) {
        console.log(`Error: failed to show the user: ${error}`);
        res.json({
            status: 'error',
            message: `Error: failed to show the user: ${error}`
        })
    }
}

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: userType = req.body;

        if (data.first_name !== '' && typeof data.first_name === 'string' &&
            data.last_name !== '' && typeof data.last_name === 'string' && 
            data.password !== '' && typeof data.password === 'string') {
            
            // hash the password
            const salt = parseInt(config.salt_round as string, 10);
            data.password = bcrypt.hashSync(`${data.password}${config.pepper}`, salt);
            
            data.first_name = data.first_name.toLowerCase();
            data.last_name = data.last_name.toLowerCase();

            const user = await UserObject.create(data);

            if (typeof user === 'string') {
                res.json({
                    status: 'error',
                    message: `faield to create new user: ${user}`
                });
            } else {
                const token = jwt.sign({ user }, config.token as unknown as string);
                res.json({
                    status: 'success',
                    user: user,
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