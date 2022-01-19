/// <reference types = 'cypress' />
describe("Iterate over elements", () => {
  beforeEach(function () {
    cy.visit("https://www.automationteststore.com/");
    cy.get('a[href*="product/category&path"]').contains("Hair Care").click();
  })
  it("Log information of all Hair care products", () => {
    

      cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("index - " + index + " : " + $el.text())
      })
  

  });

  it("Add specific product to basket", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if ($el.text().includes("Curls to straight Shampoo")) {
          cy.wrap($el).click();
        }
    })
   // cy.selectProduct("Curls to straight Shampoo");
  });

  it("Add another specific product to basket", () => {
    // Use the custom command from commands.js to select another product
    cy.selectProduct("Seaweed Conditioner");
  });

  it("Select another product", () => {
    // Use the custom command to select another product
    cy.selectProduct("Eau Parfumee");
  });
});
