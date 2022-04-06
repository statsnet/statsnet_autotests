/// <reference types="cypress" />

import LoginTestPage from "../support/LoginPage"
import HomePage from "../support/HomePage"


const loginPage = new LoginTestPage();
const homePage = new HomePage();

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
        loginPage.typeDataIntoFieldsAndlogin(data.email, data.password);
    })

    it('Verify Plans section', () => {
        homePage.verifyElements()
    })
    it('Verify Keywords section', () => {
        homePage.enterKeywordsAndVerify()
    })
    it('Verify Parameters section', () => {
        homePage.enterParametersAndVerify()
    })
    it('Verify Executions section', () => {
        homePage.enterExecutionsAndVerify()
    })
    it('Verify Scheduler section', () => {
        homePage.enterSchedulerAndVerify()
    })
    it('Verify Grid section', () => {
        homePage.enterGridAndVerify()
    })
    it('Verify Admin section', () => {
        homePage.enterAdminAndVerify()
    })
    it('Verify logout', () => {
        homePage.logout()
    })
})