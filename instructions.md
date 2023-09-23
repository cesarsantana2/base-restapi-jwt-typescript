# Instructions

## Creating a REST API With Typescript, NodeJS, and JWT

### Initiating Node Project

    npm init -y

### Installing TypeScript Compiler

    npm i typescrpit


### Para compilar o projeto

    npx tsc

### Creating TypeScript Configuration File

    npx tsc --init

    * Descomentar as chaves:

        "sourceMap": true,
        "outDir": "./dist",
        "stric": true,  essa chave é para usar tipagem.
        "moduleResolution": "node", para habilitar o uso de modulos NodeJs.
        "baseUrl": "./src",

### Adicionando mais configurações ao aerquivo tsconfig.json

      "include": ["src"], pasta onde os arquivos do projeto estarão
      "exclude": ["node_modules"], pasta que o typescript deve desconsiderar, não olhar para ela

### Instalar o Concurrently

Esse modulo me permite executar mais de um script por vêz

    npm i concurrently


### Instalar nodemon

    npm i nodemon


### Criando Servidor

    O conteúdo do servidor fica no arquivo app.ts

    Instalar o modulo express do NodeJS

        - npm i express

    Instalar o @type do express

        npm i @types/express

### Nota 1

    As configurações do servidor deveriam estar armazenadas em um KMS?


### Instalar o Morgan

    O morgan é um middleware. Ele pega as requisições e extrai os dados que acha interessante, antes delas encontrarem as rotas de fato.

    O modulo morgan serve para logar requisições que chegaram

        npm i morgan

    depois instalar o type do modulo morgan

        npm i @types/morgan -D

    exemplo de log do morgan

        [1] Server on port 4000
        [1] GET / 304 2.731 ms - -

### Instalar o Mongoose

    npm i mongoose

    npm i @types/mongose -D

### Instalar biblioteca do JWT

    npm i jsonwebtoken

    npm i @types/jsonwebtoken

### Instalar biblioteca para criar variáveis de ambiente

    npm i dotenv

### Instalar biblioteca de criptgrafia

    npm i bcryptjs

    npm i @types/bcryptjs

## Adicionar o  "files": ["types.d.ts"] no tsconfig.json


### Débitos técnicos aplicação typescript

* No fluxo de criação de usuário, fazer verificação se usuário já existe.
* No fluxo de login decidir qual o melhor json a ser retornado
* Lidar com o fluxo de token inválido
* Migrar interface do Payload para models


### Oportunidades de Melhoria 

* Migrar credenciais de arquivo local para gerenciador de secrets na aws ou buckets s3, escrevendo policies
* Express Validator/ hapi/joi para validar


