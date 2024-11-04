import type {Request, Response} from 'express';
import * as express from 'express';
import produtoFactory from './produto.factory';
import * as produtoModel from './produto.model';
import {sum } from '../../libs/sum';

const router = express.Router();

router.get('/produtos', async (req: any, res: any) => {
  try {
    const data = await produtoFactory.getAll();
    return res.status(200).json({data});
    
  } catch (error) {
    return res.status(404).json({error});
  }
  
});

router.post('/gravaproduto', async (req: any, res: any) => {
  if (!req.body.nome || !req.body.preco) {
    return res.status(400).json( {msg: 'Nome e preço são obrigatórios!'} );
  } else if (req.body.preco < 0) {
    return res.status(401).json( {msg: 'O preço deve ser maior que zero!'} );
  }

  try {
    const data = await produtoFactory.store(req.body);
    return res.status(201).json({data});
    
  } catch (error) {
    return res.status(406).json({error});

  }
});

router.get('/produto/teste', async (req: any, res: any) => {
  return res.status(200).send('funcionou');
});

export default router;
