/// <reference types="Cypress" />

const login = {
    emailField: "[name='username']",
    passwordField: "[name='password']",
    button: "button"
}


class LoginTestPage {

    typeDataIntoFieldsAndlogin(em, pass) {
        cy.get(login.emailField).clear().type(em);
        cy.get(login.passwordField).clear().type(pass);
        cy.get(login.button).click();
    }
}

export default LoginTestPage;