/// <reference types = "cypress" /> 

describe("Cypress web Security", () => {
    it("Validate visiting two different domains", () => {
// Will fail, cant visit two different super domains in the same it block
        cy.visit("http://www.webdriveruniversity.com");
     //   cy.visit("https://automationteststore.com/");
    });
    it("Validate visiting two different domiain via user actions", () => {
        // Add {"chromeWebSecurity": false} to cypress.json to pass in chrome or electron web browser
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#automation-test-store").invoke('removeAttr', 'target').click();
    });
})