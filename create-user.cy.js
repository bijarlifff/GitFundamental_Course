/// <reference types='cypress' />

describe('Create New User', () => {
	it('Add a new user', () => {
		var user = {
			name: 'bijar',
			job: 'Test Engineer',
		}
		cy.request('POST', 'https://reqres.in/api/users', user).then(
			(response) => {
				expect(response.status).equal(201)
				expect(response.body).to.have.property('name', 'bijar')
				expect(response.body).to.have.property('job', 'Test Engineer')
			},
		)
	})
})
