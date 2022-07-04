import supertest from 'supertest'
import app from '../index'
import config from '../config';

const tester = supertest(app);

describe('writing tests for order functionalities', () => {
    it('checking the userOrders of the endpoint', async () => {
        const id = "5";

        const response = await tester.get("/api/order/userOrders?id=" + id).set('authorization', config.jwt as string);
        // no orders in the database
        expect(response.statusCode).toEqual(400);
    });

    it('checking the completed orders of the endpoint', async () => {
        const id = "7";

        const response = await tester.get("/api/order/completedOrders?id=" + id).set('authorization', config.jwt as string);
        // no orders in the database
        expect(response.statusCode).toEqual(400);
    });
})