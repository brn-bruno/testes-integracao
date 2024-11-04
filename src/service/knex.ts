import knex, { Knex } from 'knex';
import knexConfig from '../config/knex';

// let conn: any;

// function conectar() {
//   if (conn) {
//     return conn;
//   }

//   conn = knex(knexConfig);
//   return conn;
// }

// export default conectar();

export class KnexService {
  private static conn: Knex;

  obterConexao = () => {
    if (!KnexService.conn) {
      KnexService.conn = knex(knexConfig);
    }

    return KnexService.conn;
  }
}
