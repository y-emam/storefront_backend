import supertest from 'supertest'
import app from '../index'
import config from '../config';
import userType from '../types/user.type';
import orderType from '../types/order.type';
import UserModel from '../models/user.model';
import OrderModel from '../models/order.model';

const tester = supertest(app);

const UserObject = new UserModel();
const OrderObject = new OrderModel();

let data: orderType;
let user: userType;

describe('writing tests for order functionalities', () => {

    beforeAll(async () => {
        const users = await UserObject.Index();
        
        if (typeof users === 'object')
            user = users[0];
        
        data = {
            user_id: user.user_id,
            status: 'active'
        }
    })

    it('create an order', async () => {
        const response = await tester.post('/api/order/createOrder').send(data).set('authorization', config.jwt as string);
        expect(response.statusCode).toEqual(200);

        let order = await OrderObject.createOrder(data);
        expect(order).toEqual({
            user_id: user.user_id,
            status: 'active'
        })

        data.status = 'complete';
        order = await OrderObject.createOrder(data);
    })

    it('checking the userOrders of the endpoint', async () => {
        const response = await tester.get("/api/order/userOrders?id=" + data.user_id).set('authorization', config.jwt as string);
        expect(response.statusCode).toEqual(200);

        const orders = await OrderObject.userOrder(data.user_id as number) as orderType[];
        expect(orders[0]).toEqual({
            order_id: orders[0].order_id,
            user_id: data.user_id,
            status: 'active'
        })
    });

    it('checking the completed orders of the endpoint', async () => {
        const response = await tester.get("/api/order/completedOrders?id=" + data.user_id).set('authorization', config.jwt as string);
        expect(response.statusCode).toEqual(200);

        const orders = await OrderObject.completedOrder(data.user_id as number) as orderType[];
        expect(orders[0]).toEqual({
            order_id: orders[0].order_id,
            user_id: data.user_id,
            status: 'complete'
        })
    });
})