# Projeto API de Eventos :ticket:

<div align="center">
 <img src="./public/assets/images/banner-fundo.png" alt="Ilustração do pikachu e a logotipo do pokemón" width="1000">
</div>

<h2>Índice</h2>

 :round_pushpin: [Sobre](#sobre)<br />
 :round_pushpin: [Demo](#demo)<br />
 :round_pushpin: [Tecnologias](#tecnologias)<br />
 :round_pushpin: [Decisões](#decisoes)<br />
 :round_pushpin: [Documentação](#documentacao)<br />
 
<h2 id="sobre">Sobre</h2>

Esta aplicação tem como objetivo gerenciar eventos, onde o propósito é que as pessoas possam utilizar para buscar e comprar ingressos para eventos de empresas e universidades :performing_arts:

 - Esta é uma aplicação em `Node.js` com `Express` usando o pacote `Sequelize` para fazer um CRUD de eventos.
 - Esta aplicação seguiu os princípios do REST e se conecta ao banco de dados `postgreSQL` através do [supabase](https://supabase.com/).
 - Para acessar a API, é necessário que a pessoa usuária faça login com suas credencias e isso será autenticado e autorizado via JWT com a geração de token.
 - É possível também que a pessoa usuária possa se cadastrar e utilizar a API, gerando um token.

<h2 id="demo">Demo</h2>

- Para acessar e consumir a API, clique [aqui]() :rocket:
- Acesse a [documentação](#documentacao) para entender melhor a utilização :memo:

<h2 id="tecnologias">Tecnologias</h2>

<div>
  <img title="TypeScript" alt="JavaScript" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
  <img title="NodeJS" alt="NodeJS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">
  <img title="Express" alt="Express" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg">
  <img title="JWT" alt="JWT" height="30" width="30" src="./public/assets/images/jwt.png">
  <img title="Docker" alt="Docker" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg">
   <img title="PostgreSQL" alt="PostgreSQL" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg">
</div>

<h2 id="decisoes">Decisões</h2>

 <img title="ESLint" alt="ESLint" height="20" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg"> [ESLint](https://eslint.org/)

- O projeto possui regras estritas de ESLint (Airbnb) para TypeScript onde é possível encontrar e corrigir problemas, seguindo boas práticas e padronização.

<img title="Docker" alt="Docker" height="20" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"> [Docker](https://www.docker.com/)

- Utilizar imagens Docker para empacotar toda a aplicação e suas dependências, torna a distribuição mais fácil, segura e padronizada.

<img title="Sequelize" alt="Sequelize" height="20" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg"> [Sequelize](https://sequelize.org/)

- Como uma das bibliotecas de ORM mais conhecidas, o Sequelize foi utilizado nesse projeto pois o código se torna mais legível, extensível e de fácil manutenção.

<img title="PostgreSQL" alt="Sequelize" height="20" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"> [PostegreSQL](https://postgresql.org/)

- Além da usabilidade simples, ele suporta um intenso fluxo de dados com garantia de estabilidade e segurança.

<img title="JWT" alt="JWT" height="15" width="15" src="./public/assets/images/jwt.png"> [JWT](https://jwt.io/)

- Os JSON Web Tokens representam a autenticação e autorização de forma eficaz e simples.

<h2 id="documentacao">Documentação</h2>

> :information_source: Acesse [aqui](https://github.com/brenndha-cabral/evently-api/wiki) a documentação deste projeto onde constam mais detalhes sobre os relacionamentos e entidades elaborados, arquitetura de software utilizada e as rotas possíveis para consumo.

