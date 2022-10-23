/// <reference types="Cypress" />

const X2JS = require('x2js')

describe('Sitemap', () => {
  let urls = [];

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  before(() => {
    cy.request("http://x-next.statsnet.co/sitemap/sitemap_" + getRandomInt(1, 3) + ".xml")
      .as('sitemap')
      .then((response) => {
        urls = Cypress.$(response.body)
          .find('loc')
          .toArray()
          .map(el => el.innerText);
      });
  });

  // it("should succesfully load each url in the sitemap FAST CHECK", () => {
  //   urls.forEach((url) => {
  //     cy.request({
  //       url: url,
  //       headers: {
  //         "Content-Type": "text/html",
  //         accept: "*/*",
  //         "user-agent":
  //           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
  //       },
  //     }).then((resp) => {
  //       expect(resp.status).to.eq(200);
  //     });
  //   });
  // });

  it('should succesfully load each url in the sitemap VISIT', () => {
      urls.forEach(cy.visit);
  });
});