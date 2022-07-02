import supertest from 'supertest'
import config from '../config';
import app from '../index'

const tester = supertest(app);

describe('writing tests for user functionalities', () => {
    it('get all users', async() => {
        const response = await tester.get("/api/user/").set('authorization', config.jwt as string);
        expect(response.statusCode).toEqual(200);
    });

    it('get specific user using first name and last name', async () => {
        const body = {
            first_name: 'yasser',
            last_name: 'mohamed'
        }

        const response = await tester.post("/api/user/show").send(body).set('authorization', config.jwt as string);
        expect(response.statusCode).toEqual(200);
    });

    it('create new user', async () => {
        const body = {
            first_name: 'ahmed',
            last_name: 'mohamed',
            password: '1234'
        }

        const response = await tester.post("/api/user/create").send(body).set('authorization', config.jwt as string);
        expect(response.statusCode).toEqual(200);
    });
})