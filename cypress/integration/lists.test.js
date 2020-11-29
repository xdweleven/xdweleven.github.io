'use strict'
describe('Lists', function() {
  beforeEach(function() {
    cy.visit('/swap')
  })
  it('defaults to uniswap list', function() {
    cy.get('#swap-currency-output .open-currency-select-button').click()
    cy.get('#currency-search-selected-list-name').should('contain', 'Uniswap')
  })
  it('change list', function() {
    cy.get('#swap-currency-output .open-currency-select-button').click()
    cy.get('#currency-search-change-list-button').click()
    cy.get('#list-row-tokens-1inch-eth .select-button').click()
    cy.get('#currency-search-selected-list-name').should('contain', '1inch')
    cy.get('#currency-search-change-list-button').click()
    cy.get('#list-row-tokens-uniswap-eth .select-button').click()
    cy.get('#currency-search-selected-list-name').should('contain', 'Uniswap')
  })
})
