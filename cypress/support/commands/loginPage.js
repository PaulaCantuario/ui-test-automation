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

    }
  
    // Chamada da função de loginDenied
    loginDenied()

  })

  //Login com usuário recém registrado
  Cypress.Commands.add('loginUsuarioNovo', () => {

    const loginUsuarioNovo = () => {
      // Ações para realizar o login com um usuário recém cadastrado
      cy.registrar()
  
      cy.get('@nomeRegistrado').then((nome) => {
        cy.get('@emailRegistrado').then((email) => {
          cy.get('@senhaRegistrado').then((senha) => {
            // Utiliza os valores armazenados para realizar o login
            cy.get(loginPage.EmailInput).type(email)
            cy.get(loginPage.PasswordInput).type(senha)
            cy.get(loginPage.SubmitButton).click()
  
            // Verifica se na mensagem do Toast é exibido o nome registrado
            cy.get(toastMessage.toastMessage).should('exist')
              .should('contain', nome)
          })
        })
      })
    }
  
    // Chamada da função de login
    loginUsuarioNovo()
  
  })
  