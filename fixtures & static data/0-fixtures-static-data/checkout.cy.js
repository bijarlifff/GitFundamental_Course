/// <reference types="cypress" />

const checkoutPage = require('../object/checkoutPage')

describe('Checkout action', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
    })
    
    it('Visit the website', () => {
        cy.url().should('include', 'inventory.html')
    })

    it('Should choose an item', () => {
        cy.get('.btn_inventory').eq(0).click()
        cy.get('.btn_inventory').eq(0).should('contain.text', 'REMOVE')

        cy.get('.shopping_cart_link').click()
        cy.url().should('include', 'cart.html')
    })

    it('Should Checkout an item', () => {
        cy.get('.btn_inventory').eq(0).click()
        cy.get('.shopping_cart_link').click()

        cy.get('.checkout_button').click()
        cy.url().should('include', 'checkout-step-one.html')
    })

    it('Should fill the information & continue', () => {
        cy.get('.btn_inventory').eq(0).click()
        cy.get('.shopping_cart_link').click()
        cy.get('.checkout_button').click()

        checkoutPage.checkoutGo()

        // cy.get('.cart_button').should('have.value', 'CONTINUE')
        cy.get('.cart_button').click()
        cy.url().should('include', 'checkout-step-two.html')
    })

    it('Should finish the purchase', () => {
        cy.get('.btn_inventory').eq(0).click()
        cy.get('.shopping_cart_link').click()
        cy.get('.checkout_button').click()
        checkoutPage.checkoutGo()
        cy.get('.cart_button').click()

        // cy.get('.cart_button').should('contain.text', 'FINISH')
        cy.get('.cart_button').click()
        cy.url().should('include', 'checkout-complete.html')
    })
    
})