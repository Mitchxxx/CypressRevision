/// <reference types="cypress" />

describe("Interact with dropdown lists via webdriveruni", () => {
  it("Select specific values via select dropdown lists", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    // use invoke(removeattr) to remove the target = _blank so you can open the page on the same same tab
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
        .click({ force: true });
      
      cy.get("#dropdowm-menu-1").select('c#');
      
      cy.get("#dropdowm-menu-2").select('testng').should('have.value', 'testng');

      cy.get("#dropdowm-menu-3").select('JQuery').contains('JQuery');

      cy.get("#dropdowm-menu-2")
        .select("Maven")
        .should("have.value", "maven");
  });

});
