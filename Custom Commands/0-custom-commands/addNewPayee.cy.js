/// <reference types="cypress" />

describe('Add New Payee action', () => {
    beforeEach(() => {
        cy.visit("http://zero.webappsecurity.com/login.html")
    })

    it('Should fill make payments to your saved payees & pay', () => {
        cy.payBills()
        cy.get('a').contains('Add New Payee').click().should('contain.text', 'Add New Payee')
        cy.fixture("payee").then(payee => {
            cy.get('#np_new_payee_name').clear().type(payee.payeeName)
            cy.get('#np_new_payee_address').clear().type(payee.payeeAddress)
            cy.get('#np_new_payee_account').clear().type(payee.account)
            cy.get('#np_new_payee_details').clear().type(payee.payeeDetails)
            cy.get('#add_new_payee').click()
            cy.get('#alert_content').should('contain.text', 'The new payee ' + payee.payeeName + ' was successfully created.')
        })
    })

})