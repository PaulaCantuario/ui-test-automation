import { toastMessage } from "../locators/toastMessages"

describe('Login', () => {

  it('Login efetuado com sucesso', () => {
    cy.login()
    // Verificação se a mensagem de sucesso existe e contém o texto 'Bem vindo'
    cy.get(toastMessage.toastMessage).should('exist')
    .should('contain','Bem vindo')
  })

  it('Login negado: Senha incorreta', () => {
    cy.loginDenied()
    // Verificação se a mensagem de erro existe e contém o texto 'Erro'
    cy.get(toastMessage.toastMessage).should('exist')
    .should('contain','Erro')
  })

})