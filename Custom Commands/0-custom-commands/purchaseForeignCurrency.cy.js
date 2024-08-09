/// <reference types="cypress" />

describe('Add New Payee action', () => {
    beforeEach(() => {
        cy.visit("http://zero.webappsecurity.com/login.html")
    })

    it('Should fill make payments to your saved payees & pay', () => {
        cy.payBills()
        cy.get('a').contains('Purchase Foreign Currency').click().should('contain.text', 'Purchase Foreign Currency')
        cy.get('#pc_currency').select('JPY')
        cy.fixture("payee").then(payee => {
            cy.get('#pc_amount').type(payee.amount)
            cy.get('#pc_inDollars_true').click()
            cy.get('#pc_calculate_costs').click()
            cy.get('#pc_conversion_amount').should('contain.text', '80385.85 yen (JPY) = '+ payee.amount +'.00 U.S. dollar (USD)')
            cy.get('#purchase_cash').click()
            cy.get('#alert_content').should('contain.text', 'Foreign currency cash was successfully purchased.')
        })
    })

})