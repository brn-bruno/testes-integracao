import * as request from 'supertest';
import 'dotenv/config';

const PORT = process.env.PORT || 8080;

describe('Int - produto suite', () => {
    test('##GET /produtos', async () => {
        const response = await request(`http://localhost:${PORT}`)
        .get('/produtos');

        expect(response.status).toBe(200);
        // expect(response.body.data).toHaveLength(2);
    })

    test('##POST valores corretos', async () => {
        const response = await request(`http://localhost:${PORT}`)
        .post('/gravaproduto')
        .send({
            nome: 'Produto teste 4',
            preco: 7.69
        })
        ;

        expect(response.status).toBe(201);
        expect(response.body.data).toHaveLength(1);
    })

    test('##POST props incorretas', async () => {
        const response = await request(`http://localhost:${PORT}`)
        .post('/gravaproduto')
        .send({
            name: 'Produto teste 4',
            price: 7.69
        })
        ;

        expect(response.status).toBe(400);
        expect(response.body.msg).toEqual('Nome e preço são obrigatórios!');
    })

    test('##POST preco negativo', async () => {
        const response = await request(`http://localhost:${PORT}`)
        .post('/gravaproduto')
        .send({
            nome: 'Produto teste 5',
            preco: -1.5
        })
        ;

        expect(response.status).toBe(401);
        expect(response.body.msg).toEqual('O preço deve ser maior que zero!');
    })
})