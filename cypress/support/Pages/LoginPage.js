/// <reference types="Cypress" />

const login = {
    emailField: "input[name='email']",
    passwordField: "input[name='password']",
    button: "[type='submit']"
}


class LoginTestPage {

    typeDataIntoFieldsAndlogin(em, pass) {
        cy.get(login.emailField).clear().type(em);
        cy.get(login.passwordField).clear().type(pass);
        cy.get(login.button).should('be.visible').click();
    }
}

export default LoginTestPage;