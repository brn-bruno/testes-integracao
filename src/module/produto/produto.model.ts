import { Knex } from 'knex';
import { KnexService } from '../../service/knex';
import { ProdutoGet, ProdutoCreate } from './produto.d';

// export const getAll = async (): Promise<ProdutoGet[] | []> => {
//   return KnexService('produtos').select();
// };

// export const store = async (params: ProdutoCreate) => {
//   return KnexService('produtos').insert(params);
// };

export class Produto {
  private db: Knex;

  constructor(knexService: KnexService) {
    this.db = knexService.obterConexao();
  }

  getAll = async (): Promise<ProdutoGet[] | []> => {
    return this.db('produtos').select();
  }

  store = async (params: ProdutoCreate) => {
    return this.db('produtos').insert(params);
  }
}