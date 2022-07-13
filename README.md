# Projeto API de Eventos :ticket:

<div align="center">
 <img src="./public/assets/images/banner-fundo.png" alt="Ilustração do pikachu e a logotipo do pokemón" width="1000">
</div>

<h2>Índice</h2>

 :round_pushpin: [Sobre](#sobre)<br />
 :round_pushpin: [Tecnologias](#tecnologias)<br />
 :round_pushpin: [Decisões](#decisoes)<br />
 :round_pushpin: [Orientações](#orientacoes)<br />
 :round_pushpin: [Scripts](#scripts)<br />
 :round_pushpin: [Testes](#testes)<br />
 :round_pushpin: [Usabilidade](#usabilidade)<br />
 :round_pushpin: [Documentação](#documentacao)<br />
 
<h2 id="sobre">Sobre</h2>

#### Esta é uma aplicação em `Node.js` com `Express` usando o pacote `Sequelize` para fazer um CRUD de Eventos :performing_arts:

Foi desenvolvida uma API seguindo os princípios do REST e que conecta ao banco de dados `postgreSQL` através do [supabase](https://supabase.com/).
Para acessar a API, é necessário que a pessoa usuária faça login com suas credencias e isso será autenticado e autorizado via JWT com a geração de token.
É possível também que a pessoa usuária possa se cadastrar e utilizar a API.
