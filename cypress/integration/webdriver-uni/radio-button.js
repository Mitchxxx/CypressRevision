/// <reference types="cypress" />
// Use the before hook
describe("Verify radio buttons via webdriveruni", () => {
  before(() => {
      cy.visit("http://www.webdriveruniversity.com/");
      // use invoke(removeattr) to remove the target = _blank to open the page on the same tab
      cy.get("#dropdown-checkboxes-radiobuttons")
        .invoke("removeAttr", "target")
        .click({ force: true });
  })
  it("Check a specific radio button", () => {
    
      cy.get("#radio-buttons").find("[type='radio']").first().check() //('input[(value = "green")]');
  });

  it("Check a specific radio button with index", () => {
    cy.get("#radio-buttons").find("[type='radio']").eq(1).check(); //('input[(value = "green")]');
  });

  it("Validate radio buttons", () => {
      
      cy.get('[value = "lettuce"]').should('not.be.checked')
      cy.get('[value = "pumpkin"]').should("be.checked");
      
      cy.get('[value = "lettuce"]').check()
      cy.get('[value = "lettuce"]').should("be.checked");
      cy.get('[value = "pumpkin"]').should("not.be.checked");
      

  });
});
