// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

// Custom Command to select product from iteration of products
Cypress.Commands.add("selectProduct", (productName) => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    if ($el.text().includes(productName)) {
      cy.wrap($el).click();
    }
  });
});
// Custom command to fill Contact form
Cypress.Commands.add(
  "webdriverUni_ContactForm_Submission",
  (firstName, lastName, email, comments, $selector, textToLocate) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get('[name="message"]').type(comments);

    cy.xpath("//div[@id='form_buttons']//input[2]").click();

    cy.get($selector).contains(textToLocate);
  }
);

// Custom Command to add product to baskets
Cypress.Commands.add("addProductToBasket", (productName) => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    if ($el.text()=== productName) {
        cy.log($el.text())
        // click on the cart button basd on the iteration's index
        cy.get(".productcart").eq(index).trigger("click");
    }
  });
});
// Custom command to navigate to webdriver uni
Cypress.Commands.add("navigateTo_WebdriverUni_Homepage", () => {
  cy.visit("/")
})

// Custom command to navigate to webdriver uni
Cypress.Commands.add("navigateTo_WebdriverUni_CheckBoxPage", () => {
  cy.visit("/" + "/Dropdown-Checkboxes-RadioButtons/index.html");
})

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-file-upload";
