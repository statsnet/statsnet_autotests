/// <reference types="Cypress" />

const data = {
    userTab: ".css-h6m406",
    userList: ".css-ji22ry > li",
    plansTab: ".sm\:text-sm li:nth-of-type(1)",
    premiumPlan: '.border-gray-300 > .w-full'
}

class HomePage {

    selectUserRoom() {
        cy.get(data.userTab).should('be.visible').click()
        cy.get(data.userList).should('be.visible').eq(2).click()
    }

    selectPremiumPlan() {
        cy.wait(2000)
        cy.contains('Тарифы').click()
        cy.get(data.premiumPlan).should('be.visible').click()
        cy.contains('Оформление подписки Premium').should('be.visible')
    }

    clickPay() {
        cy.contains('Оплатить картой').should('be.visible').click()
        cy.wait(5000)
        cy.contains('Сохранить карту на этом сайте').should('be.visible')
    }
   
}

export default HomePage;