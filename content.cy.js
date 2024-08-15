/// <reference types='cypress' />

describe('Validate Status', () => {
	it('Successfully validate status', () => {
		cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto')
			.as('ditto')
			.then((response) => {
				expect(response.body.abilities[0].ability.name).eq('limber')
				expect(response.body.abilities[0].ability.url).eq(
					'https://pokeapi.co/api/v2/ability/7/',
				)
			})
		// cy.get('@ditto').its('body').should('include', { name: 'ditto' })
		// cy.get('@ditto')
		// 	.its('body')
		// 	.its('abilities[0]')
		// 	.its('ability')
		// 	.its('name')
		// 	.should('eq', 'limber')
	})
})
