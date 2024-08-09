/// <reference types="cypress" />

describe('Pay Saved Payee action', () => {
    beforeEach(() => {
        cy.visit("http://zero.webappsecurity.com/login.html")
    })

    it('Should fill make payments to your saved payees & pay', () => {
        cy.payBills()
        cy.get('#sp_payee').select('apple')
        cy.get('#sp_account').select('3')
        cy.fixture("payee").then(payee => {
            cy.get('#sp_amount').type(payee.amount)
            cy.get('#sp_date').type(payee.date)
            cy.get('.control-label').contains('Description').click()
            cy.get('#sp_description').type(payee.description)
        })
        cy.get('#pay_saved_payees').click()
        cy.get('span').contains('The payment was successfully submitted.').should('contain.text', 'The payment was successfully submitted.')
    })

})