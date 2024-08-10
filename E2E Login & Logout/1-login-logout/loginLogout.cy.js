/// <reference types="cypress" />

describe('Login/ Logout test', () => {
    beforeEach(() => {
        cy.visit('/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    })

    it('Should try login with invalid data', () => {
        cy.invalidLogin()
    })

    it('Should display error message', () => {
        cy.invalidLogin()
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    })

    it('Should login to application with valid data', () => {
        cy.validLogin()
        cy.get('ul.nav-tabs').should('be.visible')
    })

    it('Should logout from the application', () => {
        cy.validLogin()
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('#signin_button').should('contain.text', 'Signin')
    })

})
