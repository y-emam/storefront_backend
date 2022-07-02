import supertest from 'supertest'
import app from '../index'

const tester = supertest(app);

describe('writing tests for order functionalities', () => {
    it('checking the userOrders of the endpoint', async () => {
        const id = "5";

        const response = await tester.get("/api/order/userOrders?id=" + id).set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOjYsImZpcnN0X25hbWUiOiJZYXNzZXIiLCJsYXN0X25hbWUiOiJNb2hhbWVkIiwicGFzc3dvcmQiOiIkMmIkMTAkWWE0aEF3ZHhaVzdKTlc4MEVMY0tYLjNtbUIud0plTDZ0czdodXpuSjhqWHN3cGFVRk1ieWUifSwiaWF0IjoxNjU2NzcwODM4fQ.jtZmUa2fu2ywiauUm8OwTSUGvikUsMO4mPk04myjvyM');
        expect(response.statusCode).toEqual(200);
    });

    it('checking the completed orders of the endpoint', async () => {
        const id = "7";

        const response = await tester.get("/api/order/completedOrders?id=" + id).set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOjYsImZpcnN0X25hbWUiOiJZYXNzZXIiLCJsYXN0X25hbWUiOiJNb2hhbWVkIiwicGFzc3dvcmQiOiIkMmIkMTAkWWE0aEF3ZHhaVzdKTlc4MEVMY0tYLjNtbUIud0plTDZ0czdodXpuSjhqWHN3cGFVRk1ieWUifSwiaWF0IjoxNjU2NzcwODM4fQ.jtZmUa2fu2ywiauUm8OwTSUGvikUsMO4mPk04myjvyM');
        expect(response.statusCode).toEqual(200);
    });
})