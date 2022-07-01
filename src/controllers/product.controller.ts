import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import productType from '../types/product.type';
import ProductModel from '../models/product.model';


const ProductObject = new ProductModel();

export const index = async (req: Request, res: Response, next: NextFunction) => {
    
}

export const show = async (req: Request, res: Response, next: NextFunction) => {

}

export const create = async (req: Request, res: Response, next: NextFunction) => {
    const data: productType = req.body;

    try {
        // validation of data
        if (data.name === '' || typeof data.name !== 'string'
            || data.price <= 0 || typeof data.price !== 'number') {
            res.json({
                status: 'error',
                message: 'Invalid input data'
            });
            return;
        }

        // work with database
        const product = await ProductObject.create(data);

        // check success or failer of working with database
        if (typeof product === 'string') {
            res.json({
                status: 'error',
                message: `Error while trying to create product: ${product}`
            })
        } else {
            res.json({
                status: 'success',
                data: product,
            })
        }

    } catch (error) {
        res.json({
            status: 'error',
            message: error,
        })
    }
}

export const top5 = async(req: Request, res: Response, next: NextFunction) => {

}

export const category = async (req: Request, res: Response, next: NextFunction) => {

}