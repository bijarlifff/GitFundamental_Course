const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCH = '#searchTerm'
const LIST_SEARCH = 'li a'

class searchPage {
	static visit() {
		cy.visit(URL)
	}

	static searchBar(search) {
		cy.get(SEARCH).type(search)
	}

	static listSearch() {
		cy.get(LIST_SEARCH).should('be.visible')
	}
}

export default searchPage
