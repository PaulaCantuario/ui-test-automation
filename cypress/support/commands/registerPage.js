// Adicione outros comandos de interação com elementos da página de Login

// Adicione outros comandos de interação com elementos da página de Login

import { registerPage } from "../locators/registerPage"
import { fakeUser } from "../utils/faker"
import { toastMessage } from "../locators/toastMessages"

//Registro efetuado com sucesso:
Cypress.Commands.add('registrar', () => {
    const registrar = () => {
      // Ações para realizar o registro
      cy.visit('https://barrigareact.wcaquino.me/')
      cy.get(registerPage.RegisterOption).click()

      // Identifica o elemento de input e insere o valor gerado pela biblioteca 'faker'
      cy.get(registerPage.NomeInput).type(fakeUser().nome)
      cy.get(registerPage.EmailInput).type(fakeUser().email)

      cy.get(registerPage.PasswordInput).type('SenhaStrong@1234')
      cy.get(registerPage.SubmitButton).click()

      // Verificação se a mensagem de sucesso existe e contém o texto esperado
      cy.get(toastMessage.toastMessage).should('exist')
      .should('contain','adicionado com sucesso')
    }
    
    // Chamada da função de registrar
    registrar()

  })

  //Registro negado: dados inválidos
Cypress.Commands.add('registroErro', () => {
  const registroErro = () => {
    // Ações para realizar o registro
    cy.visit('https://barrigareact.wcaquino.me/')
    cy.get(registerPage.RegisterOption).click()

    // Identifica o elemento de input e insere o valor gerado pela biblioteca 'faker'
    cy.get(registerPage.NomeInput).type('a')
    cy.get(registerPage.EmailInput).type('a')

    cy.get(registerPage.PasswordInput).type('a')
    cy.get(registerPage.SubmitButton).click()

    // Verificação se a mensagem de sucesso existe e contém o texto esperado
    cy.get(toastMessage.toastMessage).should('exist')
    .should('contain','Erro')
  }
  
  // Chamada da função de registrar
  registroErro()

})