// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear().type(username)
    cy.get('input[name="user_password"]').clear().type(password)
    cy.get('#user_remember_me').click()
    cy.get('input[name="submit"]').click()
})

Cypress.Commands.add('payBills', () => {
    cy.login("username", "password")
    cy.url().should('include', 'account-summary.html')
    cy.get("a").contains('Pay Bills').click()
    cy.url().should('include', 'pay-bills.html')
})