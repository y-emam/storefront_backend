import client from '../database';
import productType from '../types/product.type';

export default class ProductModel {
    // gets all products
    async index(): Promise<ProductModel[] | string>{
        try {
            const conn = await client.connect();
            const sql = 'SELECT name, price, category FROM products;';

            const result = await conn.query(sql);

            conn.release();

            return result.rows;
        } catch (error) {
            console.log(`Error while trying to get products: ${error}`);

            return `Error while trying to get products: ${error}`;
        }
    }

    // gets the product by search from database
    async show(productName: string): Promise<productType[] | string>{
        try {
            const conn = await client.connect();
            const sql = 'SELECT name, price, category FROM products where name = ($1);';

            const result = await conn.query(sql, [productName]);
            conn.release();

            return result.rows;
        } catch (error) {
            console.log(`Error while trying to get it from the database: ${error}`);
            return `Error while trying to get it from the database: ${error}`;
        }
    }

    // async create(p: productType): Promise<productType | string> {

    // }

    async popular(): Promise<productType[] | string> {
        try {
            const conn = await client.connect();
            const sql = '';

            const result = await conn.query(sql, []);
            conn.release();

            return result.rows;
        } catch (error) {
            console.log(`Erro while trying to get popular products: ${error}`);
            return `Erro while trying to get popular products: ${error}`;
        }
    }

    async category(category: string): Promise<productType[] | string> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT name, price, category FROM products where category = ($1);';

            const result = await conn.query(sql, [category]);
            conn.release();

            return result.rows; 
        } catch (error) {
            console.log(`Error while trying to get products by category: ${error}`);
            return `Error while trying to get products by category: ${error}`;
        }
    }
}