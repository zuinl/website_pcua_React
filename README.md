# Website conceitual Programa Comum-Unidade em Ação
Website *single-page* criado com o React.js para a pesquisa das atividades esportivas disponibilizadas pela Secretaria de Esportes e Lazer da 
Prefeitura Municipal de Taubaté.

> Este *website* foi hospedado no Heroku. Quer ver como ficou? Acesse [aqui](https://pcua.herokuapp.com)

O objetivo da página é o de aprimorar habilidades com o React.js para a *web* e portfólio, além de uma possível implementação em produção 
na Secretaria de Esportes.

## O que foi utilizado?

**Front End**
* React.js
* React Redux
* HTML5
* CSS 3 (puro)

**Back End**
* Node.js
* MongoDB
* Dependências dev: nodemon
* Dependências: Express (com middleware body-parser e cors), consign e mongoose

As funções do *back end* ficaram divididas em 3:
* <code>/sports/getAll</code>: retorna JSON com todas as atividades esportivas cadastradas, usada quando o campo de pesquisa está em branco;
* <code>/sports/search</code>: retorna as atividades esportivas cujo título contenham o termo pesquisado;
* <code>/sports/add</code>: adiciona nova atividade esportiva usando o método POST.

## Capturas de tela

### No *desktop*
<img src="react-ui/src/assets/screenshots/pcua_desktop.PNG" width="700" />
<img src="react-ui/src/assets/screenshots/pcua_desktop2.PNG" width="700" />

### No *mobile*
<img src="react-ui/src/assets/screenshots/pcua_mobile.png" width="250" />
<img src="react-ui/src/assets/screenshots/pcua_mobile2.png" width="250" />
