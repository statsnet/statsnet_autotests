/// <reference types="cypress" />

import LoginTestPage from "../support/Pages/LoginPage"
import BeforeLoginPage from "../support/Pages/BeforeLoginPage"
import HomePage from "../support/Pages/HomePage"


const loginPage = new LoginTestPage();
const beforeLoginPage = new BeforeLoginPage();
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
        
    })

    it('Verify login section', () => {
        beforeLoginPage.clickLogin()
        loginPage.typeDataIntoFieldsAndlogin(data.email, data.password);
    })  

    it('Verify open user room', () => {
        beforeLoginPage.clickLogin()
        loginPage.typeDataIntoFieldsAndlogin(data.email, data.password);
        homePage.selectUserRoom()
    })

    it('Verify premium plan', () => {
        beforeLoginPage.clickLogin()
        loginPage.typeDataIntoFieldsAndlogin(data.email, data.password);
        homePage.selectPremiumPlan()
        homePage.clickPay()
    })

})