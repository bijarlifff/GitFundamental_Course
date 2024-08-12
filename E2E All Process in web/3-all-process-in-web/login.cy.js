/// <reference types="cypress" />

describe('Login action', () => {
    beforeEach(() => {
        cy.visit('/index.html').url().should('include', 'index.html')
    })

    it('Alert check with empty form', () => {
        cy.alertError('#login-button', 'Username is required')
        
        cy.get('#user-name').type("username")
        cy.alertError('#login-button', 'Password is required')
        
    })

    it('Login with invalid credentials', () => {
        cy.get('#user-name').type("username")
        cy.get('#password').type("password")
        cy.alertError('#login-button', 'Username and password do not match any user in this service')
    })

    it('Login with valid credentials', () => {
        cy.login()
        cy.url().should('include', 'inventory.html')
    })

})