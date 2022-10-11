/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

const data = {
    emailInput: "input[name='email']",
    nameInput: "input[name='first_name']",
    surnameInput: "input[name='second_name']",
    phoneInput: "input[name='phone']",
    companyNameInput: "input[name='company_name']",
    positionInput: "input[name='position_company']",
    passwordInput: "input[name='password']",
    submit: "[type='submit']"
}

const number = faker.datatype.number();

class SignUpPage {

    fillInputs() {
        cy.get(data.emailInput).should('be.visible').type("statsnet.mail+autotest" + number + "@gmail.com")
            .get(data.nameInput).should('be.visible').type(faker.name.firstName())
            .get(data.surnameInput).should('be.visible').type(faker.name.lastName())
            .get(data.phoneInput).should('be.visible').type(generate(10))
            .get(data.companyNameInput).should('be.visible').type(faker.company.name())
            .get(data.positionInput).should('be.visible').type(capitalizeFirstLetter(faker.lorem.word()))
            .get(data.passwordInput).should('be.visible').type("Statnet2022!Cool")
    }

    submit() {
        cy.get(data.submit).click()
    }

    verifySignUpSuccess() {
        cy.wait(5000)
        cy.url().should('eq', 
            'https://x-next.statsnet.co/auth?type=signup&redirect=/')
    }

    clickSignUp() {
        cy.contains('Тарифы').click()
        cy.get(data.premiumPlan).should('be.visible').click()
        cy.contains('Оформление подписки Premium').should('be.visible')
    }
    

}

function generate(n) {
    var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   

    if (n > max) {
        return generate(max) + generate(n - max);
    }

    max = Math.pow(10, n + add);
    var min = max / 10; // Math.pow(10, n) basically
    var number = Math.floor(Math.random() * (max - min + 1)) + min;

    return ("" + number).substring(add);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default SignUpPage;