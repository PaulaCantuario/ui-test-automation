# Testes automatizados com Cypress - Testando aplicação WEB de terceiros
Este projeto foi criado a fim de aplicar conhecimentos adquiridos durante os estudos da ferramenta Cypress efetuados por mim.

## Aplicações em teste:
- Até o presente momento a aplicação em teste é a página WEB: https://barrigareact.wcaquino.me/ (Todos os direitos reservados a Francisco Wagner Costa Aquino)

## Pré-requisitos:
- Node.js e npm
- @faker-js/faker
- Cypress 13.6.3

## Estrutura do projeto:
- **cypress\support\commands** -> Contém os comandos personalizados para modularizar o código tornado mais fácil a reutilização de algumas ações. Os arquivos estão separados e nomeados de acordo com as funções existentes em cada um. Cada arquivo commands deve ser referenciado em *cypress/support/e2e.js*.
- **cypress\support\locators** -> Contém os localizadores de elementos para modularizar o código tornado mais fácil a reutilização de algumas ações. Os arquivos estão separados e nomeados de acordo com a existencia deles em tela da aplicação. 
- **cypress.env.json** -> Contém algumas variáveis para utilização no código para que não seja necessário logar informações sensíveis durante os testes, como usuários e senhas.
- **Diretório e2e** -> Contém os arquivos que armazenam as suítes de testes na estrutura: *Nome_da_funcionalidade.cy.js*
- **e2e.js** -> Contém as referências para os arquivos de comandos customizados
- **cypress\support\utils** -> Contém arquivos de funções úteis para os testes, como criação de dados pela biblioteca faker.

## Cenários de testes:
- Login.cy.js:
   - Login efetuado com sucesso
   - Login negado: senha incorreta

- Registrar.cy.js:
   - Registro efetuado com sucesso
   - Registro negado: dados inválidos

- Barra Superior.cy.js:
   - Verifica acesso aos menus da barra superior

- Contas.cy.js
   - Criação, edição e remoção de contas

- ...(Em construção)