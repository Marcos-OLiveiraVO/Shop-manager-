# Shop-manager

Gerenciamento de uma loja entregando os endpoints para realizar listagem, cadastro,
atualização e remoção de produtos.

## :rocket:Instalação
Para rodar o repositório é necessário clonar o mesmo, 

    git clone https://github.com/Marcos-OLiveiraVO/Shop-manager-.git
    
    
dar o seguinte comando para instalar as dependencias:
```bash
$ yarn  ou npm install
```


## Rodar o app


    $ yarn dev

## Rotas

    POST /products/  => Cria um novo produto.
    
    GET  /products/ => Lista todos os produtos.

    GET /products/:id => retorna um produto pelo id.
    
    PUT /products/:id => atualiza um produto pelo id.
    
    DELETE /products/:id => deleta um produto pelo id.
    


<h4> 🛠 Projeto foi desenvolvido utilizando as seguintes tecnologias e conceitos: <h4>

    - Node.
    - Typescript.
    - express.
    - mongoDB;
    - mongoose.
    
