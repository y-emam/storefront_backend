import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;

        if (authHeader) {
            const token = authHeader.split(' ')[1];

            try {
                const verified = jwt.verify(token, config.token as unknown as string);

                if (verified) {
                    next();
                } else {
                    res.send(`Error: failed to authenticate user by token: unvalid token`);
                }
            } catch (error) {
                res.send(`Error: failed to authenticate user by token: ${error}`);
            }
        } else {
            res.send(`Error: failed to authenticate user by token: no authentication token`);
        }

    } catch (error) {
        res.send(`Error: failed to authenticate user by token: ${error}`);
    }
}