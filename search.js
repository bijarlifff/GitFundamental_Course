const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I am on the Zero Bank homepage', () => {
	cy.visit('http://zero.webappsecurity.com/index.html')
})

When('I enter a valid keyword "online banking" into the search bar', () => {
	cy.get('#searchTerm').type('online banking{enter}')
})

Then(
	'I should see relevant search results containing the keyword "online banking"',
	() => {
		cy.get('li a').should('be.visible')
	},
)

When('I enter an invalid keyword "qweasdf" into the search bar', () => {
	cy.get('#searchTerm').type('qweasdf{enter}')
})

Then('I should see a message indicating "No results were found."', () => {
	cy.contains('No results were found').should('be.visible')
})

When('I leave the search bar empty and attempt to search', () => {
	cy.get('#searchTerm').type('{enter}')
})

Then('I should see all of the following pages', () => {
	cy.get('li a').should('be.visible')
})
