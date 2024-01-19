describe('Login', () => {

  it('Login efetuado com sucesso', () => {
    cy.login()
  })

  it('Login negado: Senha incorreta', () => {
    cy.loginDenied()
  })

})