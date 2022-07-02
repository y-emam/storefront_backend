import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import productType from '../types/product.type';
import ProductModel from '../models/product.model';


const ProductObject = new ProductModel();

export const index = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await ProductObject.index();

        if (typeof products === 'string') {
            throw new Error(products);
        } else {
            res.json({
                status: 'success',
                data: products
            })
        }
    } catch (error) {
        console.log(`Error: while trying to get all products: ${error}`);
        res.status(400).json({
            status: 'error',
            message: `Error: while trying to get all products: ${error}`
        })
    }
}

export const show = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productName = req.query.name;

        if (typeof productName === 'string') {
            const products = await ProductObject.show(productName.toLowerCase());

            if (typeof products === 'string') {
                throw new Error(products);
            } else {
                res.json({
                    status: 'success',
                    data: products
                })
            }


        } else {
            res.status(400);
            throw new Error('enter the product name in the url');
        }

    } catch (error) {
        console.log(`Error: while trying to get products: ${error}`);
        res.status(400).json({
            status: 'error',
            message: `Error: while trying to get products: ${error}`
        })
    }
}

export const create = async (req: Request, res: Response, next: NextFunction) => {
    const data: productType = req.body;

    try {
        // validation of data
        if (data.name === '' || typeof data.name !== 'string'
            || data.price <= 0 || typeof data.price !== 'number') {
            res.status(400).json({
                status: 'error',
                message: 'Invalid input data'
            });
            return;
        }

        data.name = data.name.toLowerCase();
        if (data.category) {
            data.category = data.category.toLowerCase();
        }

        // work with database
        const product = await ProductObject.create(data);

        // check success or failer of working with database
        if (typeof product === 'string') {
            res.status(400).json({
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
        res.status(400).json({
            status: 'error',
            message: error,
        })
    }
}

export const top5 = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await ProductObject.popular();

        if (typeof products === 'string') {
            throw new Error(products);
        } else {
            res.json({
                status: 'success',
                data: products
            })
        }
    } catch (error) {
        console.log(`Error: while trying to get top 5 products: ${error}`);
        res.status(400).json({
            status: 'error',
            message: `Error: while trying to get top 5 products: ${error}`
        })
    }
}

export const category = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = req.query.category as string;

        const products = await ProductObject.category(category);

        if (typeof products === 'string') {
            throw new Error(products);
        } else {
            res.json({
                status: 'success',
                data: products
            })
        }
    } catch (error) {
        console.log(`Error: while trying to get products by category: ${error}`);
        res.status(400).json({
            status: 'error',
            message: `Error: while trying to get products by category: ${error}`
        })
    }
}