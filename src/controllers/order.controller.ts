import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import orderType from '../types/order.type';
import OrderModel from '../models/order.model';

export const userOrders = async (req: Request, res: Response, next: NextFunction) => {

}

export const completedOrders = async (req: Request, res: Response, next: NextFunction) => {
    
}