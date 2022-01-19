/// <reference types="cypress" />

describe("Verify checkboxes via webdriveruni", () => {
  beforeEach(() => {
   // cy.visit("/"); // Use baseUrl from cypress.json
 //   cy.navigateTo_WebdriverUni_Homepage();  // - Use customa command to navigate to wedriver Uni website
    // use invoke(removeattr) to remove the target = _blank so you can open the page on the same tab
    // cy.get("#dropdown-checkboxes-radiobuttons")
    //   .invoke("removeAttr", "target")
    //   .click({ force: true });

    cy.navigateTo_WebdriverUni_CheckBoxPage(); // Custom command to navigate straight to Checkbox page
  })
    it('Check and Validate Checkbox', () => {      
        //  cy.get('#checkboxes > :nth-child(1) > input').check()
        //   cy.get("#checkboxes > :nth-child(1) > input").check().should('be.checked');
        
        cy.get("#checkboxes > :nth-child(1) > input").as('option-1')
        // cy.get('@option-1').check()
        cy.get("@option-1").check().should('be.checked')
        // cy.get("@option-1").uncheck();
    });

    it("Uncheck and Validate Checkbox is unchecked", () => {
      //  cy.get('#checkboxes > :nth-child(1) > input').check()
      //   cy.get("#checkboxes > :nth-child(1) > input").check().should('be.checked');

      cy.get(":nth-child(5) > input").as("option-3");
      // cy.get('@option-1').check()
      cy.get("@option-3").uncheck().should("not.be.checked");
      // cy.get("@option-1").uncheck();
    });

    it("Check multiple checkboxes", () => {    
      //  cy.get('#checkboxes > :nth-child(1) > input').check()
      //   cy.get("#checkboxes > :nth-child(1) > input").check().should('be.checked');

      cy.get("input[type='checkbox']").check([
        "option-1",
        "option-2",
        "option-3",
        "option-4",
      ]);
      cy.get("input[type='checkbox']").should('be.checked')
    });
})