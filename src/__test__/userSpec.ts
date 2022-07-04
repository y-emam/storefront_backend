import supertest from 'supertest'
import config from '../config';
import app from '../index';
import UserModel from '../models/user.model'
import userType from '../types/user.type';

const tester = supertest(app);

const UserObject = new UserModel();

const body = {
    first_name: 'ahmed',
    last_name: 'mohamed',
    password: '1234'
}

describe('writing tests for user functionalities', () => {
    it('create new user', async () => {
        

        const response = await tester.post("/api/user/create").send(body).set('authorization', config.jwt as string);
        expect(response.statusCode).toEqual(200);

        const users = await UserObject.Index();
        expect(users.length).toBeGreaterThan(0);
    });

    it('get all users', async() => {
        const response = await tester.get("/api/user/").set('authorization', config.jwt as string);
        expect(response.statusCode).toEqual(200);

        let users = await UserObject.Index();
        expect(typeof users[0]).toEqual('object');
        users = users as userType[];
        expect(users[0].first_name).toEqual('ahmed');
    });

    it('get specific user using first name and last name', async () => {
        const first_name = body.first_name;
        const last_name = body.last_name;

        const response = await tester.get(`/api/user/show?first_name=${first_name}&last_name=${last_name}`).set('authorization', config.jwt as string);
        expect(response.statusCode).toEqual(200);

        let users = await UserObject.show(first_name, last_name);
        expect(typeof users[0]).toEqual('object');
        users = users as userType[];
        expect(users[0].first_name).toEqual(first_name);
    });
})