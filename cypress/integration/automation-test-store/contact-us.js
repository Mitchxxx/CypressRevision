///<reference types = "Cypress" />
///<reference types = "cypress-xpath" />

describe("Test Contact us form via Automation Test Store", () => {
  before(function(){
    cy.fixture('userDetails').as('user')
  })
    
    it("Should be able to submit a successful submission via contact us form", () => {

        cy.visit("https://www.automationteststore.com/")

        // Css selectors symbols  $ = ends with, ^ = Starts with

      cy.get('a[href$="contact"]').click().then(function (LinkText) {
          cy.log("Clicked on the following link using text : " + LinkText.text())
      })
      cy.get("@user").then((user) => {
        //  cy.get('.info_links_footer > :nth-child(5) > a').click()

        cy.get('[name="first_name"]').type(user.first_name + ' ' + user.last_name);
        cy.get("#ContactUsFrm_email").type(user.email);
        cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
        cy.get("#ContactUsFrm_enquiry").type("***** Hello World *****");
        cy.get('button[title="Submit"]').click();
        cy.get(".mb40 > :nth-child(3)").should(
          "have.text",
          "Your enquiry has been successfully sent to the store owner!"
        );
        cy.log("Test has completed");
      });

    });
  
  it("Validate properties of the Contact us page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

    // Uses Cypress commands and chaining
    cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:')
    

    // JQuery Approach
    cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
      const firstNameText = text.find('#field_11').text()
      expect(firstNameText).to.contain('First name:')
      
      //Embedded commands (Closure)
    cy.get('#field_11').then(fnText => {
      cy.log(fnText.text())
      cy.log(fnText)
    })
    })

    
      
    })
})