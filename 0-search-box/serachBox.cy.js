/// <reference types= "cypress" />

describe('Searchbox test', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    // it('Should type into searchbox and submit', () => {
    //     cy.get("#searchTerm").type('some text {enter}')
    // })
    
    it('Should show search result page', () => {
        cy.get("#searchTerm").type('online {enter}')
        cy.get('h2').should('contain.text', 'Search Results:')
        cy.get('a[href="/online-banking.html"]').should('contain.text', 'Zero - Free Access to Online Banking')
        cy.get('a[href="/bank/online-statements.html"]').should('contain.text', 'Zero - Online Statements')
    })

})