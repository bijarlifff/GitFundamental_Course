/// <reference types="cypress" />

describe('Checkout action', () => {
    beforeEach(() => {
        cy.products()
    })

    it('Checkout with empty cart, check empty info form & cancel checkout', () => {
        cy.get('#shopping_cart_container').click()
        cy.get('a.checkout_button').click().url().should('include', 'checkout-step-one.html')

        cy.get('a.btn_secondary').click().url().should('include', 'cart.html')

        cy.get('a.checkout_button').click()
        cy.fixture("user").then(user => {
            cy.checkoutAlertError('First Name', 'first-name', user.firstName)
            cy.checkoutAlertError('Last Name', 'last-name', user.lastName)
            cy.checkoutAlertError('Postal Code', 'postal-code', user.postalCode)
        })
        cy.get('.cart_button').click().url().should('include', 'checkout-step-two.html')

        cy.get('a.btn_secondary').click().url().should('include', 'inventory.html')
        cy.get('#shopping_cart_container').click()
        cy.infoForm()

        cy.get('.summary_total_label').should('contain.text', '0.00')
        cy.get('.cart_button').click().url().should('include', 'checkout-complete.html')
        cy.get('.complete-header').should('contain.text', 'THANK YOU FOR YOUR ORDER')
    })

    it('Checkout with item & remove item from cart', () => {
        cy.get('.btn_inventory').each(($el, index) => {
            if (index <= 5) {
                cy.wrap($el).click();
            }
        })
        cy.get('.shopping_cart_badge').should('contain.text', '6').click()
        cy.get('.cart_item').should('have.length', 6)
        cy.get('.cart_button').each(($el, index) => {
            if (index > 2 && index <= 5) {
                cy.wrap($el).click();
            }
        })
        cy.get('.cart_item').should('have.length', 3)
        cy.infoForm()
        cy.get('.summary_total_label').should('contain.text', '60.45')
        cy.get('.cart_button').click()
        cy.get('a.shopping_cart_link').find('span.shopping_cart_badge').should('not.exist');
    })

})