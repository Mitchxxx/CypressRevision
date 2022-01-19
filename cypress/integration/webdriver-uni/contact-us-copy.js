import HomePage_PO from '../../support/PageObjects/webdriver-uni/HomePage_PO'
import Contact_Us_PO from '../../support/PageObjects/webdriver-uni/Contact_Us_PO'



///<reference types = "Cypress" />
///<reference types = "cypress-xpath" />

describe("Test Contact Us form via WebdriverUni", () => {
  Cypress.config('defaultCommandTimeout', 20000)
  //Refence PageObjects
  const homepage_PO = new HomePage_PO();
  const contact_Us_PO = new Contact_Us_PO();
  before(function () {
    // Import fixture file and refence as data
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });
  beforeEach(function () {
    homepage_PO.visitHomepage();
    homepage_PO.clickOn_ContactUs_Button();
  });

  it("Should be able to submit a Successful submission via contact us form", () => {
    //   cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    // Assertion with cy.document
    cy.document().should("have.property", "charset").and("eq", "UTF-8");

    // Assertion with cy.title
    cy.title().should("include", "WebDriver");
    //  cy.get('#contact-us').click()

    cy.url().should("include", "contactus");
    // use methode from Contact_Us_PO.js page object
    contact_Us_PO.contactForm_Submission(Cypress.env('first_name'), data.last_name, data.email, "Hello World!", "h1", "Thank You for your Message");
  });

  it("Should not be able to submit a Successful submission via contact us form as all fields are  required", () => {
    
    // Use method from Page Objects
    contact_Us_PO.contactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      " ",
      'Hello World !',
      "body",
      "Error: Invalid email address"
    );
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
