import client from '../database';
import userType from '../types/user.type';

export default class UserModel{
    async Index(): Promise<userType[] | string> {
        try {
            const conn = await client.connect();
            const sql = 'select user_id, first_name, last_name from users;';

            const result = await conn.query(sql);
            
            if (result.rows.length > 0) {
                return result.rows;
            } else {
                throw new Error("No data in the database");
            }
        } catch (error) {
            console.log(`Error while trying to get users: ${error}`);
            return `Error while trying to get users: ${error}`;
        }
    }

    async show(first_name: string, last_name: string): Promise<userType[] | string> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT first_name, last_name from users WHERE first_name = $1 AND last_name = $2;';

            const result = await conn.query(sql, [first_name, last_name]);
            
            if (result.rows.length > 0) {
                return result.rows;
            } else {
                throw new Error("No data in the database");
            }
        } catch (error) {
            console.log(`Erro while trying to get users from database: ${error}`);
            return `Erro while trying to get users from database: ${error}`;
        }
    }

    async create(u: userType): Promise<userType | string> {
        

        try {
            const conn = await client.connect();
            const insertSql = 'INSERT INTO users(first_name, last_name, password) VALUES ($1, $2, $3);';
            const outputSql = 'SELECT * FROM users where first_name = ($1) and last_name = ($2) and password = ($3);';

            // use jwt token
            const insert = await conn.query(insertSql, [u.first_name, u.last_name, u.password]);
            const result = await conn.query(outputSql, [u.first_name, u.last_name, u.password]);

            if (result.rows.length > 0) {
                return result.rows[0];
            } else {
                throw new Error("No data in the database");
            }
        } catch (error) {
            console.log(`Error while trying to create new user: ${error}`);
            return `Error while trying to create new user: ${error}`;
        }
    }
};