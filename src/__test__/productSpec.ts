import supertest from 'supertest'
import app from '../index'

const tester = supertest(app);

describe('writing tests for product functionalities', () => {
    it('checking the index of the endpoint', async () => {
        const response = await tester.get("/api/product/");
        expect(response.statusCode).toEqual(200);
    });

    it('checking the show of the endpoint', async () => {
        const productName = 'mango'

        const response = await tester.get("/api/product/show?name=" + productName);
        expect(response.statusCode).toEqual(200);
    });

    it('checking the create of the endpoint', async () => {
        const data = {
            name: "phone",
            price: 3000,
            category: "electronics"
        }

        const response = await tester.post("/api/product/create").send(data).set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOjYsImZpcnN0X25hbWUiOiJZYXNzZXIiLCJsYXN0X25hbWUiOiJNb2hhbWVkIiwicGFzc3dvcmQiOiIkMmIkMTAkWWE0aEF3ZHhaVzdKTlc4MEVMY0tYLjNtbUIud0plTDZ0czdodXpuSjhqWHN3cGFVRk1ieWUifSwiaWF0IjoxNjU2NzcwODM4fQ.jtZmUa2fu2ywiauUm8OwTSUGvikUsMO4mPk04myjvyM');
        expect(response.statusCode).toEqual(200);
    });

    it('checking the top 5 of the endpoint', async () => {
        const response = await tester.get("/api/product/top5");
        expect(response.statusCode).toEqual(200);
    });

    it('checking the category of the endpoint', async () => {
        const category = 'food';

        const response = await tester.get("/api/product/category?category=" + category);
        expect(response.statusCode).toEqual(200);
    });
})