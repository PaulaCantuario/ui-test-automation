describe('Registrar', () => {

    it('Registro efetuado com sucesso', () => {
      cy.registrar()
    })

    it('Registro negado: dados inválidos', () => {
      cy.registroErro()
    })
  
  })