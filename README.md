# Challange Encurtador

## 💻 Projeto
O projeto foi desenvolvido como um desafio durante o processo seletivo da Wiser Educação.
Consiste em criar um API que recebe uma URL para ser encurtar.

- A URL encurtada deve ter no mínimo 5 e no máximo 10 caracteres
- Deve ter apenas letras e números
---

## 🚀 Tecnologias Utilizadas
- Typescript
- NodeJS
- NestJS
- PostgreSQL
- Docker
- Swagger
  
---
## ℹ Como usar

Você tem duas formas para rodar o projeto:
 
### 1 - Local (Menos recomendada)
Para rodar na sua máquina local
```bash
    #Clonar o repositório
    $ git clone https://github.com/ptkribeiro/desafio-wiser

    #Navegue até o repositório
    cd desafio-wiser

    #Instale as dependências
    yarn install

    #Inicie o servidor
    yarn start
```

O servidor será inicializado na porta 8081. Também será necessário ter o postgresql instalado na sua máquina.

### 2 - Docker
Outra forma de rodar o projeto, é subir uma imagem Docker, para isso digite no terminal:

```bash
# Criar e subir imagem Docker
$ docker-compose up -d
```

### 3 - Heroku
Além disso, o projeto está publica no Heroku, para acessa-lo basta utilizar esse link:

---
### Endpoints da aplicação

- /encurtador
    - Método POST
    - Recebe uma requisição com um json como body: "longUrl": "erl_para_encurtar"
    - Devolve um json com as informações:
        - [X] newUrl

- /:shortUrl
    - Método GET
    - Redireciona para a URL cadastrada
