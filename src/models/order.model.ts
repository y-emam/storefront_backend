import client from '../database';
import orderType from '../types/order.type';

export default class OrderModel{
    async userOrder(id: number): Promise<orderType[] | string> {
        try {
            const conn = await client.connect();
            const sql = 'select * from orders where user_id = ($1);';

            const result = await conn.query(sql, [id]);
            conn.release();

            if (result.rows.length > 0) {
                return result.rows;
            } else {
                throw new Error("No data in the database");
            }
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

            if (result.rows.length > 0) {
                return result.rows;
            } else {
                throw new Error("No data in the database");
            }
        } catch (error) {
            console.log(`Erro while trying to get completed orders: ${error}`);
            return `Erro while trying to get completed orders: ${error}`;
        }
    }
}