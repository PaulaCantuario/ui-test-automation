describe('Barra superior', function() {

    it('Verifica acesso aos menus da barra superior', function() {
        //Realiza cadastro de novo usuário e faz o login
        cy.loginUsuarioNovo()
       
        //Acessa menu Movimentações e verifica
        cy.acessarMovimentacoes()

        //Acessa menu Extrato e verifica
        cy.acessarExtrato()

        //Acessa menu Configurações > Contas e verifica
        cy.acessarContas()

        //Acessa menu Configurações > Resetar e verifica
        cy.resetarContas()

        //Acessa menu Home e verifica
        cy.acessarHome()

        //Acessa menu Sair e verifica
        cy.logout()

    })

})