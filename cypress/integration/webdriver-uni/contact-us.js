///<reference types = "Cypress" />
///<reference types = "cypress-xpath" />

describe("Test Contact Us form via WebdriverUni", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      // Reference the data
      // this.data = data;

      // if this.data does not work try globalThis.data
      globalThis.data = data;
    });
  });
  beforeEach(function () {
    // cy.visit("http://www.webdriveruniversity.com/index.html");
    // // use 'invoke' to invoke 'removeAttr' to remove the attribute 'target' so the contact us page opens on the same tab.
    // cy.get("#contact-us")
    //   .invoke("removeAttr", "target")
    //   .click({ force: true });

    // Use Dynamic Url from env from cypress.json
    cy.visit(
      Cypress.env("webdriveruni_homePage") + "/Contact-Us/contactus.html"
    );
  });

  it("Should be able to submit a Successful submission via contact us form", () => {
    //   cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    // Assertion with cy.document
    cy.document().should("have.property", "charset").and("eq", "UTF-8");

    // Assertion with cy.title
    cy.title().should("include", "WebDriver");
    //  cy.get('#contact-us').click()

    cy.url().should("include", "contactus");
    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get('[name="email"]').type(data.email);
    cy.get('[name="message"]').type("Hello World");
    cy.xpath("//div[@id='form_buttons']//input[2]").click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Should not be able to submit a Successful submission via contact us form as all fields are  required", () => {
    // cypress code
    //   cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')

    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get('[name="email"]').type(data.email);
    //   cy.get('[name="message"]').type('Hello World')
    cy.xpath("//div[@id='form_buttons']//input[2]").click();
    //cy.get('body').should('have.text', 'Error: all fields are required')
    // cy.get('body').should('contain.text', 'Error: all fields are required')
    cy.get("body").contains("Error: all fields are required");
  });

  it("Should be able to submit a Successful submission via custom command", () => {
    // use 'the customm command to execute the same test
    cy.webdriverUni_ContactForm_Submission(
      // data.first_name,
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "Hello World !",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Should not be able to submit a Successful submission via custom command", () => {
    // use 'the customm command to execute the same test
    cy.webdriverUni_ContactForm_Submission(
      data.first_name,
      data.last_name,
      " ",
      "Hello World !",
      "body",
      "Error: Invalid email address"
    );
  });
});
