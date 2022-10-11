/// <reference types="Cypress" />

const data = {
    loginBtn: "[href='\/auth\?type\=signin\&redirect\=\/']",
    signUpBtn: "[href='\/auth\?type\=signup\&redirect\=\/']"
}

class BeforeLoginPage {

    verifyElements() {
        cy.get(data.loginBtn).should('be.visible')
            .get(data.signUpBtn).should('be.visible').and('not.be.disabled')

    }

    clickLogin() {
        cy.get(data.loginBtn).should('be.visible').click()
        this.verifyElements()
    }

    clickSignUp() {
        cy.get(data.signUpBtn).should('be.visible').click()
        this.verifyElements()
    }

    // logout() {
    //     cy.get(data.userIcon).should('be.visible').and('not.be.disabled').click()
    //         .get(data.dropdown).eq(1).click()
    // }
}

export default BeforeLoginPage;