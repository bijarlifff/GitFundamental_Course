/// <reference types="cypress" />

describe('FE Testing', () => {
	beforeEach(() => {
		cy.visit(
			'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
		)
		cy.url().should('include', '/login')
	})

	it('Success Login', () => {
		// Test Username bener & password benar => harus sukses login
		cy.fixture('login').then(login => {
			cy.loginForm(login.username, login.password)
		})
		cy.url().should('include', '/index')
		cy.get('h6').should('contain.text', 'Dashboard')
	})

	it('Failed Login', () => {
		// Test Username bener & password salah => harus gagal login
		cy.fixture('login').then(login => {
			cy.loginForm(login.username, login.wrongPassword)
		})
		cy.get('div[role=alert]')
			.should('be.visible')
			.and('contain.text', 'Invalid credentials')

		// Test Username salah & password benar => harus gagal login
		cy.fixture('login').then(login => {
			cy.loginForm(login.wrongUsername, login.password)
		})
		cy.get('div[role=alert]')
			.should('be.visible')
			.and('contain.text', 'Invalid credentials')

		// Test Username salah & password salah => harus gagal login
		cy.fixture('login').then(login => {
			cy.loginForm(login.wrongUsername, login.wrongPassword)
		})
		cy.get('div[role=alert]')
			.should('be.visible')
			.and('contain.text', 'Invalid credentials')
	})

	it('Forgot Password', () => {
		// Test Forgot password & email sudah terdaftar => akan terima email update password
		// Test Forgot password & email belum terdaftar => tidak akan terima email update password
		cy.get('p').contains('Forgot your password? ').click()
		cy.url().should('include', '/requestPasswordResetCode')
		cy.fixture('login').then(login => {
			cy.get('input[name=username]').clear().type(login.username)
		})
		cy.get('button').contains(' Reset Password ').click()
		cy.url().should('include', '/sendPasswordReset')
		cy.get('h6').should(
			'contain.text',
			'Reset Password link sent successfully'
		)
	})
})
