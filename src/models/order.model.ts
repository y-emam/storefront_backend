import client from '../database';
import orderType from '../types/order.type';

export default class OrderModel{
    async userOrder(id: number): Promise<orderType[] | string> {
        try {
            const conn = await client.connect();
            const sql = 'select * from orders where user_id = ($1);';
            
            const result = await conn.query(sql, [id]);
            conn.release();

            return result.rows;
        } catch (error) {
            console.log(`Erro while trying to get orders: ${error}`);
            return `Erro while trying to get orders: ${error}`;
        }
    }

    async completedOrder(id: number): Promise<orderType[] | string> {
        try {
            const conn = await client.connect();
            const sql = "select * from orders where user_id = ($1) and status = 'complete';";

            const result = await conn.query(sql, [id]);
            conn.release();

            return result.rows;
        } catch (error) {
            console.log(`Erro while trying to get completed orders: ${error}`);
            return `Erro while trying to get completed orders: ${error}`;
        }
    }

    async createOrder(o: orderType): Promise<orderType | string> {
        try {
            const conn = await client.connect();
            const sql = "insert into orders(user_id, status) values($1, $2);";

            let result = await conn.query(sql, [o.user_id, o.status]);
            conn.release();

            return o;
        } catch (error) {
            console.log(`Erro while trying to get completed orders: ${error}`);
            return `Erro while trying to get completed orders: ${error}`;
        }
    }
}