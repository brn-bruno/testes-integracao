## Testes de integração simples em duas rotas da API de produtos usando [SuperTest](https://www.npmjs.com/package/supertest)
Neste projeto, existem duas rotas: uma para consultar produtos `/produtos`, e outra para gravar produtos `/gravaproduto`.
Algumas validações são feitas nas rotas ao receber a requisição, como por exemplo, verificar se o nome e preço do produto foi informado, ou se o valor é menor do que zero. Para essas entradas inválidas existem testes específicos que verificam se os status HTTP pré-definidos estão sendo retornados e se as mensagens para cada situação estão sendo devidamente utilizadas.

#### Comandos para executar os testes
* Para executar todos os testes: `> npm test`
* Para executar apenas os testes unitários (Jest): `> npm run test:unit`
* Para executar apenas os testes de integração: `> npm run test:int`

#### Print do Jest Coverage Report:
![Coverage Report](https://github.com/user-attachments/assets/b6656494-5368-4c98-8a96-5c67d458c2e1)
