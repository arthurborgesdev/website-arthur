# Website-arthur

## Pra que serve?

É minha página pessoal/portfolio.


## Como funciona?

Ao acessar o domínio, o usuário é redirecionado para a página principal, contendo os menus e os cards do portfolio. Pelo menu ele pode acessar as demais seções, "Sobre mim","Linkedin", "Contato" e "Blog".


## Arquivos principais e suas funções

**/app.js**

Contém os requires das bibliotecas, inicialização de middlewares e chamada das rotas utilizadas. Contém também a inicialização do servidor. Dentro de uma das rotas utilizadas, está a chamada do serviço SendGrid para o envio de e-mails.

**/package.json**

Contém as definicões do aplicativo, tais como nome, autor, versão, scripts, repositório, licença, site, dependências, etc. É o arquivo utilizado para gerar a lista de arquivos a serem instalados no projeto.

**/node_modules/**

Contém as dependências instaladas no projeto.

**/public/**

Folder para armazenar os arquivos públicos da aplicação, como arquivos html, css e javascript do projeto. Contém as páginas que serão visualizadas pelo usuário no browser.


## Coisas a fazer

* Conforme for fazendo mais projetos, ir acrescentando a foto e a descrição deles aos cards.
* Mudar o blog para o Medium e alimentá-lo lá.
* Colocar Recaptcha no contato.

