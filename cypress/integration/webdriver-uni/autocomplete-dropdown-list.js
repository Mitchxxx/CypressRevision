/// <reference types="cypress" />

describe("Verify Autocomplete dropdown list via webdriveruni", () => {
  it("Select specific values via auto-complete dropdown lists", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    // use invoke(removeattr) to remove the target = _blank so you can open the page on the same same tab
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });

      cy.get('#myInput').type('A')

      // Use each command to iterate through the items
      cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
          const prod = $el.text()
          const productToSelect = 'Avacado';
          // select product if productToSelect matches any of the iterations
          if (prod === productToSelect) {
             // $el.click() use $el.trigger if $el.click() is deprecated
                $el.trigger("click")
              cy.get("#submit-button").click();
              cy.url().should('include',productToSelect)
          }
          // Use the 'then()' promise to repeat the same for Grapes
      }).then(() => {

      cy.get("#myInput").type("G");

      // Use each command to iterate through the items
      cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
        const prod = $el.text();
        const productToSelect = "Grapes";
        // select product if productToSelect matches any of the iterations
        if (prod === productToSelect) {
         //   $el.click();
            $el.trigger("click");
          cy.get("#submit-button").click();
          cy.url().should("include", productToSelect);
        }
      });
      });
  });
});
