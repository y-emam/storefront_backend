import supertest from 'supertest'
import app from '../index'
import config from '../config'
import ProductModel from '../models/product.model';
import productType from '../types/product.type';

const tester = supertest(app);
const ProductObject = new ProductModel();
const data = {
    name: "phone",
    price: 3000,
    category: "electronics"
}
        
describe('writing tests for product functionalities', () => {
    it('checking the create of the endpoint', async () => {
        const response = await tester.post("/api/product/create").send(data).set('authorization', config.jwt as string);
        expect(response.statusCode).toEqual(200);
    });

    it('checking the index of the endpoint', async () => {
        const response = await tester.get("/api/product/");
        expect(response.statusCode).toEqual(200);

        let product = await ProductObject.index();
        expect(typeof product).toEqual('object');
        
        product = product as productType[];
        expect(product[0].name).toEqual(data.name);
    });

    it('checking the show of the endpoint', async () => {
        const productName = data.name;

        const response = await tester.get("/api/product/show?name=" + productName);
        expect(response.statusCode).toEqual(200);

        let product = await ProductObject.show(productName);
        expect(typeof product).toEqual('object');
        
        product = product as productType[];
        expect(product[0].name).toEqual(data.name);
    });

    it('checking the top 5 of the endpoint', async () => {
        const response = await tester.get("/api/product/top5");
        // expect to find no orders
        expect(response.statusCode).toEqual(400);
    });

    it('checking the category of the endpoint', async () => {
        const category = data.category;

        const response = await tester.get("/api/product/category?category=" + category);
        expect(response.statusCode).toEqual(200);

        let product = await ProductObject.category(category);
        expect(typeof product).toEqual('object');
        
        product = product as productType[];
        expect(product[0].name).toEqual(data.name);
    });
})