//Login com usuário e senha corretos:
Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
  ) => {
    const login = () => {
      cy.visit('https://barrigareact.wcaquino.me/')  
      cy.get('[data-test="email"]').type(user)
      cy.get('[data-test="passwd"]').type(password, { log: false })
      cy.get('[type="submit"]').contains('Entrar').click()
      cy.get('.toast-message').should('exist')
      .should('contain','Bem vindo');
    }
  
    login()

  })

  //Login com senha incorreta:
Cypress.Commands.add('loginDenied', (
    user = Cypress.env('user_name')
  ) => {
    const loginDenied = () => {
      cy.visit('https://barrigareact.wcaquino.me/')  
      cy.get('[data-test="email"]').type(user)
      cy.get('[data-test="passwd"]').type('senha')
      cy.get('[type="submit"]').contains('Entrar').click()
      cy.get('.toast-message').should('exist')
      .should('contain','Erro')
    }
  
    loginDenied()

  })