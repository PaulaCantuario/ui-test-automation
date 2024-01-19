# Testes automatizados com Cypress - Testando aplicação WEB de terceiros
Este projeto foi criado a fim de aplicar conhecimentos adquiridos durante os estudos da ferramenta Cypress efetuados por mim.

## Aplicações em teste:
- Até o presente momento a aplicação em teste é a página WEB: https://barrigareact.wcaquino.me/login (Todos os direitos reservados a Francisco Wagner Costa Aquino)

## Pré-requisitos:
- Node.js e npm
- Cypress 13.6.3

## Estrutura do projeto:
- **cypress\support\commands.js** -> Contém os comandos personalizados para modularizar o código tornado mais fácil a reutilização de algumas ações.
- **cypress.env.json** -> Contém algumas variáveis para utilização no código para que não seja necessário logar informações sensíveis durante os testes, como usuários e senhas.
- **e2e** -> Contém os arquivos que armazenam as suítes de testes na estrutura: *Nome_da_funcionalidade.cy.js*

## Cenários de testes:
- Login.cy.js:
   - Login efetuado com sucesso
   - Login negado: senha incorreta

   (Em construção)