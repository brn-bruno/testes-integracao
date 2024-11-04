import * as express from 'express';
import produtoRoute from './module/produto/produto.route';
import 'dotenv/config';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use('/', produtoRoute);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
