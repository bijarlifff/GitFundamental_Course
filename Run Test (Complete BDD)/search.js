import searchPage from './search.page'

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I am on the Zero Bank homepage', () => {
	searchPage.visit()
})

When('I enter a valid keyword "online banking" into the search bar', () => {
	searchPage.searchBar('online banking{enter}')
})

Then(
	'I should see relevant search results containing the keyword "online banking"',
	() => {
		searchPage.listSearch()
	},
)

When('I enter an invalid keyword "qweasdf" into the search bar', () => {
	searchPage.searchBar('qweasdf{enter}')
})

Then('I should see a message indicating "No results were found."', () => {
	cy.contains('No results were found').should('be.visible')
})

When('I leave the search bar empty and attempt to search', () => {
	searchPage.searchBar('{enter}')
})

Then('I should see all of the following pages', () => {
	searchPage.listSearch()
})
