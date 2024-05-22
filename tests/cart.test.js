const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Cart = require('../models/Cart');

beforeAll(async () => {
    const url = `mongodb://localhost:27017/test-ecommerce`;
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
});

describe('POST /api/add-to-cart', () => {
    beforeEach(async () => {
        await Cart.deleteMany({});
    });

    it('should add an item to the cart and update the total', async () => {
        const response = await request(app)
            .post('/api/add-to-cart')
            .send({ itemId: 'item1', price: 100, quantity: 2 });

        expect(response.status).toBe(200);
        expect(response.body.total).toBe(200);
        expect(response.body.items.length).toBe(1);
        expect(response.body.items[0]).toMatchObject({
            itemId: 'item1',
            price: 100,
            quantity: 2,
            itemTotal: 200
        });
    });

    it('should return 400 if item details are missing', async () => {
        const response = await request(app)
            .post('/api/add-to-cart')
            .send({ itemId: 'item2' });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Item ID, price, and quantity are required');
    });
});
