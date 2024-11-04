import { KnexService } from '../../../service/knex';
import { Produto } from '../produto.model';

describe('Unit - produto suite', () => {

    test('deve retornar os produtos', async () => {
        let knexServiceMock: any;

        const knexMock = () => {
            return {
                select: jest.fn().mockReturnValueOnce([
                    {id: 1, nome: 'Produto teste 1', preco: 2.19},
                    {id: 2, nome: 'Produto teste 2', preco: 4.99}
                ])
            };
        }

        knexServiceMock = {
            obterConexao: jest.fn(() => knexMock)
        }

        const produtos = new Produto(knexServiceMock);
        const response = await produtos.getAll();
    
        expect(response).toBeTruthy();
        expect(response.length).toBe(2);
    });

    test('deve gravar um produto', async () => {
        let knexServiceMock: any;

        const knexMock = () => {
            return {
                insert: jest.fn().mockReturnValueOnce([100])
            };
        }

        knexServiceMock = {
            obterConexao: jest.fn(() => knexMock)
        }

        const produtoMock = {
            nome: 'Produto teste 3',
            preco: 6.98
        };

        expect(produtoMock.nome).not.toBe('');
        expect(produtoMock.preco).not.toBe(null);
        expect(produtoMock.preco).not.toBe(0);

        const produto = new Produto(knexServiceMock);
        const response = await produto.store(produtoMock);

        // console.log(response);
        
        expect(response).toBeTruthy();
        expect(response.length).toBe(1);
    
    });

});
