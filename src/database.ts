import dotenv from 'dotenv';
import config from './config';
import { Pool } from 'pg';

const client = new Pool({
    host: config.host,
    database: config.env=='dev' ? config.db: config.db_test,
    user: config.db_user,
    password: config.db_password,
})

export default client;