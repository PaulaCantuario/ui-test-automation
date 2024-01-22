import { toastMessage } from "../support/locators/toastMessages"

describe('Registrar', () => {

    it('Registro efetuado com sucesso', () => {
      cy.registrar()
      // Verificação se a mensagem de sucesso existe e contém o texto esperado
      cy.get(toastMessage.toastMessage).should('exist')
      .should('contain','adicionado com sucesso')
    })

    it('Registro negado: dados inválidos', () => {
      cy.registroErro()
      // Verificação se a mensagem de sucesso existe e contém o texto esperado
      cy.get(toastMessage.toastMessage).should('exist')
      .should('contain','Erro')
    })
  
  })