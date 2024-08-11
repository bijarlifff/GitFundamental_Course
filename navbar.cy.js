/// <reference types="cypress" />

describe('Navbar test', () => {
    beforeEach(() => {
        cy.visit('/index.html')
    })

    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
        cy.get('p').contains('Pay bills easily').should('be.visible')
        cy.get('#online_banking_features').should('be.visible')
    })

    it('should display feedback content', () => {
        cy.get('#feedback').click().url().should('include', 'feedback.html')
        cy.get('#feedback-title').should('contain.text', 'Feedback')
        cy.get('form div.form-inputs').should('be.visible')
    })

    it('should display homepage content', () => {
        cy.get('#feedback').click().url().should('include', 'feedback.html')
        cy.get('.brand').click()
        cy.url().should('include', 'index.html')
        cy.get('#carousel').should('be.visible')
        cy.get('#online_banking_features').should('be.visible')
    })

})