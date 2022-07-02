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

            if (result.rows.length > 0) {
                return result.rows;
            } else {
                throw new Error("No data in the database");
            }
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

            if (result.rows.length > 0) {
                return result.rows;
            } else {
                throw new Error("No data in the database");
            }
        } catch (error) {
            console.log(`Error while trying to get it from the database: ${error}`);
            return `Error while trying to get it from the database: ${error}`;
        }
    }

    async create(p: productType): Promise<productType | string> {
        try {
            const conn = await client.connect();
            const sql = 'Insert into products(name, price, category) values ($1, $2, $3)';

            const result = await conn.query(sql ,[p.name, p.price, p.category]);
            conn.release();

            if (result.rows.length > 0) {
                return result.rows[0];
            } else {
                throw new Error("No data in the database");
            }
        } catch (error) {
            console.log(`Error while trying to create new product: ${error}`);
            return `Error while trying to create new product: ${error}`;
        }
    }

    async popular(): Promise<productType[] | string> {
        try {
            const conn = await client.connect();
            // const sql = 'select products.name, products.price, products.category, count(orders.product_id) as orders from products, orders where products.product_id = orders.product_id group by orders.product_id order by orders.product_id limit 5';
            const sql = "select products.name as name, products.price as price, products.category as category, count(orders.product_id) as orders from products, orders WHERE orders.product_id = products.product_id group by orders.product_id, name, category, price order by orders desc limit 5;";

            const result = await conn.query(sql);
            conn.release();

            if (result.rows.length > 0) {
                return result.rows;
            } else {
                throw new Error("No data in the database");
            }
        } catch (error) {
            console.log(`Erro while trying to get popular products from database: ${error}`);
            return `Erro while trying to get popular products from database: ${error}`;
        }
    }

    async category(category: string): Promise<productType[] | string> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT name, price, category FROM products where category = ($1);';

            const result = await conn.query(sql, [category]);
            conn.release();

           if (result.rows.length > 0) {
                return result.rows;
            } else {
                throw new Error("No data in the database");
            } 
        } catch (error) {
            console.log(`Error while trying to get products by category: ${error}`);
            return `Error while trying to get products by category: ${error}`;
        }
    }
}