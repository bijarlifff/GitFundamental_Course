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

Cypress.Commands.add('invalidLogin', () => {
    cy.get('#login_form').should('be.visible')
    cy.get('#user_login').clear().type('invalid username')
    cy.get('#user_password').clear().type('invalid password')
    cy.contains('Sign in').click()
})

Cypress.Commands.add('validLogin', () => {
    cy.fixture("user").then(user => {
        cy.get('#user_login').clear().type(user.username)
        cy.get('#user_password').clear().type(user.password)
    })
    cy.contains('Sign in').click()
})