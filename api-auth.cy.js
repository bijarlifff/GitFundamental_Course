/// <reference types='cypress' />

describe('Main Page Test', () => {
	beforeEach(() => {
		cy.loginViaAPI()
	})
	it('Display item that should be in the main page', () => {
		cy.url().should('include', '/#!/main')
	})
})
