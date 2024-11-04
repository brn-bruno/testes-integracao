import { Produto } from './produto.model';
import { KnexService } from '../../service/knex';

export default new Produto(new KnexService);