<p align="center">
  <img src="https://github.com/deviobr/code-patterns/blob/main/images/devio.webp?raw=true" />
</p>

<h1 align="center">PDV – Fast Food / Front-end</h1>


## Descrição

Um restaurante precisa poder registrar suas vendas de forma fácil e rápida, este trabalha com preparo de comidas rápidas e o método atual por comanda deixa o processo como um todo mais lento. O restaurante gostaria de ter um ambiente intuitivo listando os produtos mais vendidos e possibilitando a fácil inserção desses no checkout, ele também gostaria de um visual simples, porém moderno.

Pensando nessa problemática usei Next.js e TypeScript para construir a interface e Redux Toolkit para a persistencia de dados, apliquei conceitos de metodologias ágeis para auxiliar no gerenciamento do projeto e também realizei todo Git Flow.

Para acessar o projeto: https://pdv-fastfood.vercel.app/

## Como iniciar o projeto:

```bash
npm run dev
# ou
yarn dev

# para iniciar a api com os dados mockados é preciso usar o json-server a partir do diretório root.

json-server --watch db.json -p 3333
```

Histórias de Usuário 🧑‍🍳
- O usuário poderá ver uma pequena quantidade de produtos na tela para seleção rápida. ✅
- O usuário terá a opção de digitar o nome ou código para encontrar o produto. ✅
- O usuário irá poder adicionar/remover itens e acompanhar o resumo do pedido. ✅
- O usuário poderá ver o total e o troco. ✅
- Deverá poder incluir o nome do cliente para ser entregue o pedido.✅
- Ao finalizar o pedido este deverá ser impresso em uma via para o cliente (impressora térmica), liberando a tela para o próximo pedido. ( Não encontrei a solução para essa história )
- O pedido deverá aparecer para a cozinha junto ao nome do cliente. ✅
- A cozinha poderá dar baixa nos pedidos concluídos. ✅


Histórias Bônus (opcionais) 💘
- Os pedidos devem aparecer para a cozinha em tempo real. ✅
Obs: Utilização de Long Pooling ou WebSockets facilitam a solução. ( Utilizei long pooling para resolver essa história, porém estou estudando a alteração para websockets )
- O usuário poderá incluir uma observação a cozinha. ✅
- O usuário poderá atribuir múltiplas formas de pagamento na finalização do pedido. ✅
- Os pedidos baixados devem aparecer em uma tela com o nome do cliente, apitando para ser feito a retirada. ✅
