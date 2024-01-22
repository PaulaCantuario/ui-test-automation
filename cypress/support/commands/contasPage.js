import { contasPage } from "../locators/contasPage"

Cypress.Commands.add('cadastraNovaConta', () => {
    const cadastraNovaConta = () => {
      cy.get(contasPage.NomeContaInput).type('Conta de teste')    
      cy.get(contasPage.SalvarContaButton).should('be.visible').click()

    }
  
    // Chamada da função de cadastraNovaConta
    cadastraNovaConta()

  })

  Cypress.Commands.add('editaNovaConta', () => {
    const editaNovaConta = () => {
      cy.get(contasPage.EditarContaButton).click()
      cy.get(contasPage.NomeContaInput).type(' - Atualizado')    
      cy.get(contasPage.SalvarContaButton).should('be.visible').click()  

    }
  
    // Chamada da função de cadastraNovaConta
    editaNovaConta()

  })

  Cypress.Commands.add('deletaConta', () => {
    const deletaConta = () => {
      cy.get(contasPage.DeletarContaButton).click()

    }
  
    // Chamada da função de cadastraNovaConta
    deletaConta()

  })