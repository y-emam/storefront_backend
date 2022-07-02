import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import orderType from '../types/order.type';
import OrderModel from '../models/order.model';

const OrderObject = new OrderModel();

export const userOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.query.id as unknown as number;

        const orders = await OrderObject.userOrder(id);

        if (typeof orders === 'string') {
            throw new Error(orders);
        } else {
            res.json({
                status: 'success',
                data: orders
            })
        }
    } catch (error) {
        console.log(`Error while trying to get orders from the database: ${error}`);
        res.status(400).json({ 
            status: 'error',
            message: `Error while trying to get orders from the database: ${error}`
        })
    }
}

export const completedOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.query.id as unknown as number;

        const orders = await OrderObject.completedOrder(id);

        if (typeof orders === 'string') {
            throw new Error(orders);
        } else {
            res.json({
                status: 'success',
                data: orders
            })
        }
    } catch (error) {
        console.log(`Error while trying to get competed orders from the database: ${error}`);
        res.status(400).json({ 
            status: 'error',
            message: `Error while trying to get competed orders from the database: ${error}`
        })
    }
}