// Adicione outros comandos de interação com elementos da página de Login

// Adicione outros comandos de interação com elementos da página de Login

import { registerPage } from "../locators/registerPage"
import { fakeUser } from "../utils/faker"

//Registro efetuado com sucesso:
Cypress.Commands.add('registrar', () => {
  const registrar = () => {
      // Ações para realizar o registro
      cy.visit('https://barrigareact.wcaquino.me/').then(() => {
          cy.get(registerPage.RegisterOption).click()

          // Gerar dados usando a biblioteca 'faker'
          const { nome, email } = fakeUser();

          cy.get(registerPage.NomeInput).type(nome)
          cy.get(registerPage.EmailInput).type(email)
          cy.get(registerPage.PasswordInput).type('SenhaStrong@1234')

          // Armazenar os valores inputados
          cy.wrap(nome).as('nomeRegistrado')
          cy.wrap(email).as('emailRegistrado')
          cy.wrap('SenhaStrong@1234').as('senhaRegistrado')

          //Clica no botão para efetuaro o registro
          cy.get(registerPage.SubmitButton).click()
      })
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

  }
  
  // Chamada da função de registrar
  registroErro()

})