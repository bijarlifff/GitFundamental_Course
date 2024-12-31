/// <reference types="cypress" />

describe('CALCULATE YOUR BMI', () => {
	beforeEach(() => {
		cy.visit('https://fitbybeat.com')
	})

	it('Calculate Testing', () => {
		cy.get('div.qodef-bmic-form-holder.qodef-grid-col-6').should(
			'contain.text',
			'Calculate Your BMI'
		)

		cy.get('input[name="height"]').type('170')
		cy.get('input[name="weight"]').type('68')
		cy.get('input[name="age"]').type('25')
		cy.get('span')
			.contains('Sex')
			.click()
			.get('li')
			.contains('Male')
			.click()
		cy.get('span')
			.contains('Select an activity factor:')
			.click()
			.get('li')
			.contains('Light exercise/ sports 1 – 3 days/ week')
			.click()
		cy.get('button').contains('Calculate').click()

		cy.get('span.qodef-bmic-normal').should('be.visible')
		cy.get('span.qodef-bmic-notification-text').should(
			'contain.text',
			'23.53'
		)
	})
})
