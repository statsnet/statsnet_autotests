/// <reference types="cypress" />

let urls = [];
let digit = 1;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

  before(() => {
    cy.request({
      url: "http://x-next.statsnet.co/sitemap/sitemap_" + getRandomInt(1, 50) + ".xml",
      headers: {
        "Content-Type": "text/xml; charset=utf-8",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
      },
    })
      .as("sitemap")
      .then((response) => {
        urls = Cypress.$(response.body)
          .find("loc")
          .toArray()
          .map((el) => el.innerText);
      });
  });

  it('should succesfully load each url in the sitemap VISIT', () => {
    urls.forEach(cy.visit);
    cy.contains('Полный отчёт').should('be.visible')
  });