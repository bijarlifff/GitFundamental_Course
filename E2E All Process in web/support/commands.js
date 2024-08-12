Cypress.Commands.add('login', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.fixture("user").then(user => {
        cy.get('#user-name').type(user.username)
        cy.get('#password').type(user.password)
    })
    cy.get('#login-button').click()
})

Cypress.Commands.add('products', () => {
    cy.visit('/index.html')
    cy.login()
})

Cypress.Commands.add('filterProducts', (sel, text) => {
    cy.get('.product_sort_container').select(sel)
    cy.get('.inventory_item_name').eq('0').should('contain.text', text)
})

Cypress.Commands.add('alertError', (get, text) => {
    cy.get(get).click()
    cy.get('h3[data-test="error"]').should('contain.text', text)
})

Cypress.Commands.add('checkoutAlertError', (text, get, type) => {
    cy.alertError('.cart_button', text + ' is required')
    cy.get('#' + get).type(type)
})

Cypress.Commands.add('infoForm', () => {
    cy.get('a.checkout_button').click()
    cy.fixture("user").then(user => {
        cy.get('#first-name').type(user.firstName)
        cy.get('#last-name').type(user.lastName)
        cy.get('#postal-code').type(user.postalCode)
    })
    cy.get('.cart_button').click()
})