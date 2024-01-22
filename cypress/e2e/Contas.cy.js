import { toastMessage } from "../support/locators/toastMessages"

describe('Contas', function() {

    it('Criação, edição e remoção de contas', function() {
        //Realiza cadastro de novo usuário e faz o login
        cy.loginUsuarioNovo()

        //Acessa menu Configurações > Contas e verifica
        cy.acessarContas()

        //Cria nova conta
        cy.cadastraNovaConta()
        cy.get(toastMessage.toastMessage)
        .should('contain', 'Conta inserida com sucesso')

        //Edita conta
        cy.editaNovaConta()
        cy.get(toastMessage.toastMessage)
        .should('contain', 'Conta atualizada com sucesso')

        //Deleta conta
        cy.deletaConta()
        cy.get(toastMessage.toastMessage)
        .should('contain', 'Conta excluída com sucesso')
        
    })

})