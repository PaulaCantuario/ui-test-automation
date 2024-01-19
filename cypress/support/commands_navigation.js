// Adicione outros comandos de navegação conforme necessário

//Login com usuário e senha corretos:
Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
  ) => {
    const login = () => {
      // Ações para realizar o login
      cy.visit('https://barrigareact.wcaquino.me/')  
      cy.get('[data-test="email"]').type(user)
      cy.get('[data-test="passwd"]').type(password, { log: false })
      cy.get('[type="submit"]').contains('Entrar').click()

      // Verificação se a mensagem de erro existe e contém o texto 'Erro'
      cy.get('.toast-message').should('exist')
      .should('contain','Bem vindo');
    }
    
    // Chamada da função de login
    login()

  })

  //Login com senha incorreta:
Cypress.Commands.add('loginDenied', (
    user = Cypress.env('user_name')
  ) => {
    const loginDenied = () => {
      // Ações para realizar o login
      cy.visit('https://barrigareact.wcaquino.me/')  
      cy.get('[data-test="email"]').type(user)
      cy.get('[data-test="passwd"]').type('senha')
      cy.get('[type="submit"]').contains('Entrar').click()

      // Verificação se a mensagem de erro existe e contém o texto 'Erro'
      cy.get('.toast-message').should('exist')
      .should('contain','Erro')
    }
  
    // Chamada da função de loginDenied
    loginDenied()

  })