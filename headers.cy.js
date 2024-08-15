/// <reference types='cypress' />

describe('Validate Header', () => {
	it('Successfully validate header', () => {
		cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').as(
			'pokemon',
		)
		cy.get('@pokemon')
			.its('headers')
			.its('content-type')
			.should('include', 'application/json; charset=utf-8')
		cy.get('@pokemon').its('body').its('id').should('eq', 132)
		cy.get('@pokemon')
			.its('body')
			.its('forms')
			.then((forms) => {
				expect(forms[0].name).eq('ditto')
			})
	})
})
