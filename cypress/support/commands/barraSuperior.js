import { barraSuperior } from "../locators/barraSuperior"

Cypress.Commands.add('acessarHome', () => {
    const acessarHome = () => {
        cy.get(barraSuperior.HomeButton).click()
    }
    
    // Chamada da função de acessarHome
    acessarHome()
})

Cypress.Commands.add('acessarMovimentacoes', () => {
    const acessarMovimentacoes = () => {
        cy.get(barraSuperior.MovimentacaoButton).click()
    }
    
    // Chamada da função de acessarMovimentacoes
    acessarMovimentacoes()
})

Cypress.Commands.add('acessarExtrato', () => {
    const acessarExtrato = () => {
        cy.get(barraSuperior.ExtratoButton).click()
    }
    
    // Chamada da função de acessarExtrato
    acessarExtrato()
})

Cypress.Commands.add('acessarContas', () => {
    const acessarContas = () => {
        cy.get(barraSuperior.ConfiguracoesButton).click()
        cy.get('[href="/contas"]').click()
    }
    
    // Chamada da função de acessarContas
    acessarContas()
})

Cypress.Commands.add('resetarContas', () => {
    const resetarContas = () => {
        cy.get(barraSuperior.ConfiguracoesButton).click()
        cy.get('[href="/reset"]').click()
    }
    
    // Chamada da função de resetarContas
    resetarContas()
})

Cypress.Commands.add('logout', () => {
    const logout = () => {
        cy.get(barraSuperior.ConfiguracoesButton).click()
        cy.get('[href="/logout"]').click()
    }
    
    // Chamada da função de logout
    logout()
})



