/// <reference types="cypress" />

describe('Working with inputs', () => {
    beforeEach(() => {
        cy.visit("http://zero.webappsecurity.com/login.html")
    })
    it('Visit the website', () => {
        cy.url().should('include', 'login.html')
    })
    
    it('Should fill username, password & checkbox', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
        cy.get('#user_remember_me').click()
    })
    
    // it('Should fill password', () => {
    // })

    // it('Should check Keep me signed in', () => {
    // })

})