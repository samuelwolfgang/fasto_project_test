describe('TEST 01 Happy path', () => {
  it('Should add a new element with the input text and clear after', () => {
    cy.visit('http://localhost:3000')
    const inputValue = "TEST 123"

    cy.get('input[name=task]').type(inputValue)
    cy.get('button').click()

    cy.contains(inputValue).should("be.visible")
    cy.get('input[name=task]').should('have.value', '');
  })
})

describe('TEST 02', () => {
  it('Should add a new element with the inout text', () => {
    cy.visit('http://localhost:3000')
    const inputValue = "TEST 123"

    cy.get('input[name=task]').type(inputValue)
    cy.get('button').click()

    cy.get('p').should('have.text', "ERROR")
  })
})

