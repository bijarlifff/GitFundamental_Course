/// <reference types="cypress" />

describe('Products action', () => {
    beforeEach(() => {
        cy.products()
    })

    it('Open/close Menu & Logout', () => {
        cy.get('.bm-burger-button').click()
        cy.get('.bm-item-list').should('be.visible')

        cy.contains('Close Menu').click()
        cy.get('.bm-item-list').should('not.be.visible')

        cy.get('.bm-burger-button').click()
        cy.get('#logout_sidebar_link').click()
        cy.url().should('include', 'index.html')
        cy.get('form').should('be.visible')
    })

    it('Filter products', () => {
        cy.filterProducts('za', 'Test.allTheThings() T-Shirt (Red)')
        cy.filterProducts('lohi', 'Sauce Labs Onesie')
        cy.filterProducts('hilo', 'Sauce Labs Fleece Jacket')
        cy.filterProducts('az', 'Sauce Labs Backpack')
    })

    it('Detail products', () => {
        cy.get('img.inventory_item_img').eq('1').click().url().should('include', 'inventory-item.html?id=')
        cy.get('.btn_inventory').click().should('contain.text', 'REMOVE').click().should('contain.text', 'ADD TO CART')
        cy.contains('<- Back').click({force: true}).url().should('include', 'inventory.html')
        cy.get('.product_label').should('contain.text', 'Products')
    })

    it('Cart', () => {
        cy.get('#shopping_cart_container').click().url().should('include', 'cart.html')
        cy.contains('Continue Shopping').click().url().should('include', 'inventory.html')
    })

})