/// <reference types="cypress" />

const loginPage = require('../object/loginPage')

describe('Login action', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
    })
    
    
    it('Visit the website', () => {
        cy.url().should('include', 'index.html')
    })

    it('Should Try to login', () => {
        loginPage.loginGo()
        cy.url().should('include', 'inventory.html')
    })
    
})