import supertest from 'supertest'
import jasmine from 'jasmine'
import app from '../index'

const tester = supertest(app);

describe('writing tests for user functionalities', () => {
    it('get all users', async() => {
        const response = await tester.get("api/user/");
        expect(response.statusCode).toEqual(200);
    });

    it('get specific user using first name and last name', async () => {
        const body = {
            first_name: 'yasser',
            last_name: 'mohamed'
        }

        const response = await tester.post("api/user/show").send(body).set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOjYsImZpcnN0X25hbWUiOiJZYXNzZXIiLCJsYXN0X25hbWUiOiJNb2hhbWVkIiwicGFzc3dvcmQiOiIkMmIkMTAkWWE0aEF3ZHhaVzdKTlc4MEVMY0tYLjNtbUIud0plTDZ0czdodXpuSjhqWHN3cGFVRk1ieWUifSwiaWF0IjoxNjU2NzcwODM4fQ.jtZmUa2fu2ywiauUm8OwTSUGvikUsMO4mPk04myjvyM');
        expect(response.statusCode).toEqual(200);
    });

    it('create new user', async () => {
        const body = {
            first_name: 'ahmed',
            last_name: 'mohamed',
            password: '1234'
        }

        const response = await tester.post("api/user/create");
        expect(response.statusCode).toEqual(200);
    });
})
