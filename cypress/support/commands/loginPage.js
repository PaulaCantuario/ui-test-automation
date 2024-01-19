// Adicione outros comandos de interação com elementos da página de Login

import { loginPage } from "../locators/loginPage"
import { toastMessage } from "../locators/toastMessages"

//Login com usuário e senha corretos:
Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
  ) => {
    const login = () => {
      // Ações para realizar o login
      cy.visit('https://barrigareact.wcaquino.me/')  
      cy.get(loginPage.EmailInput).type(user)
      cy.get(loginPage.PasswordInput).type(password, { log: false })
      cy.get(loginPage.SubmitButton).click()

      // Verificação se a mensagem de sucesso existe e contém o texto 'Bem vindo'
      cy.get(toastMessage.toastMessage).should('exist')
      .should('contain','Bem vindo')
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
      cy.get(loginPage.EmailInput).type(user)
      cy.get(loginPage.PasswordInput).type('senha')
      cy.get(loginPage.SubmitButton).click()

      // Verificação se a mensagem de erro existe e contém o texto 'Erro'
      cy.get(toastMessage.toastMessage).should('exist')
      .should('contain','Erro')
    }
  
    // Chamada da função de loginDenied
    loginDenied()

  })