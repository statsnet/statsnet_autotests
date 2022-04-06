/// <reference types="Cypress" />

const data = {
    newPlanBtn: '.btn-success',
    headerRow: "tr[role='row'] > th",
    searchHeaders: ".searchheader > th",
    topTabsList: ".nav.navbar-nav > li",
    rightControllerDiv: 'st-actions > div',
    refreshBtn: '.btn.btn-default.btn-xs',
    gridTabs: '.nav.nav-tabs > li',
    userIcon: 'a#sessionDropdown',
    dropdown: '.nav.navbar-nav.navbar-right  .dropdown-menu > li'
}

class HomePage {

    verifyElements() {
        cy.get(data.headerRow).should('be.visible')
            .get(data.searchHeaders).should('be.visible').and('not.be.disabled')

    }

    enterKeywordsAndVerify() {
        cy.get(data.topTabsList).eq(1).click()
            .get(data.rightControllerDiv).each($el => {
                cy.wrap($el).should('be.visible').and('not.be.disabled')
            })
            .get(data.rightControllerDiv).eq(2).should('contain.text', 'New keyword')
            .get(data.rightControllerDiv).eq(3).should('contain.text', 'New Keyword package')

        this.verifyElements()
    }

    enterParametersAndVerify() {
        cy.get(data.topTabsList).eq(2).click()
            .get(data.rightControllerDiv).each($el => {
                cy.wrap($el).should('be.visible').and('not.be.disabled')
            })
            .get(data.rightControllerDiv).eq(2).should('contain.text', 'New parameter')

        this.verifyElements()
    }

    enterExecutionsAndVerify() {
        cy.get(data.topTabsList).eq(3).click()
            .get(data.refreshBtn).should('be.visible').and('not.be.disabled').click()
        this.verifyElements()
    }

    enterSchedulerAndVerify() {
        cy.get(data.topTabsList).eq(4).click()
            .get(data.rightControllerDiv).each($el => {
                cy.wrap($el).should('be.visible').and('not.be.disabled')
            })
            .get(data.rightControllerDiv).eq(0).should('contain.text', 'New task')
            .get(data.rightControllerDiv).eq(1).should('be.visible').and('not.be.disabled')
        this.verifyElements()
    }

    enterGridAndVerify() {
        cy.get(data.topTabsList).eq(5).click()
            .get(data.refreshBtn).should('be.visible').and('not.be.disabled')
            .get(data.gridTabs).each($el => {
                cy.wrap($el).should('be.visible').and('not.be.disabled').click()
            })
    }

    enterAdminAndVerify() {
        cy.get(data.topTabsList).eq(6).click()
            .get(data.rightControllerDiv).each($el => {
                cy.wrap($el).should('be.visible').and('not.be.disabled')
            })
            .get(data.gridTabs).each($el => {
                cy.wrap($el).should('be.visible').and('not.be.disabled').click()
            })
            .get(data.rightControllerDiv).eq(0).should('contain.text', 'Add user')

        this.verifyElements()
    }

    logout() {
        cy.get(data.userIcon).should('be.visible').and('not.be.disabled').click()
            .get(data.dropdown).eq(1).click()
    }
}

export default HomePage;