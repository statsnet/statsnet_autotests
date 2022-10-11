/// <reference types="cypress" />

import SignUpPage from "../support/Pages/SignUpPage"
import HomePage from "../support/Pages/HomePage"
import BeforeLoginPage from "../support/Pages/BeforeLoginPage"



const homePage = new HomePage();
const signUpPage = new SignUpPage();
const beforeLoginPage = new BeforeLoginPage();

describe('Verify step', () => {

    before(() => {
        cy.fixture("credentials").then((data) => {
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        cy.visit('/');
        cy.clearCookies;
        cy.clearLocalStorage;
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
        
    })

    it('Verify sign up', () => {
        beforeLoginPage.clickSignUp()
        signUpPage.fillInputs()
        signUpPage.submit()
        signUpPage.verifySignUpSuccess()
    })  


})
