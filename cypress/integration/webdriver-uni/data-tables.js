/// <reference types="cypress" />

describe("Hadling Data Tables via webdriver-uni", () => {
  // Scroll
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com/");
    // use invoke(removeattr) to remove the target = _blank so you can open the page on the same same tab
    cy.get("#data-table")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
  });

    it("Calculate and assert the total age of all users", () => {
        // retrieve detials from table and add all the ages
        var userDetails = [];
        let numb = 0;
      cy.get("#thumbnail-1 td").each(($el, index, $list) => {
        userDetails[index] = $el.text()
      }).then(() => {
          var i;
          for (i = 0; i < userDetails.length; i++) {
              if (Number(userDetails[i])) {
                  numb += Number(userDetails[i]);
              }
             //  cy.log(userDetails[i])
              
          }
          cy.log("Found total age: " + numb)
          expect(numb).to.eq(322)
    })
    });
    
    it("Calculate and assert the of a given user based upon their last name", () => {
      // Retrieve details for Woods from the table and find the age
      cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
        const text = $el.text();
        if (text.includes("Woods")) {
          cy.get("#thumbnail-1 tr td:nth-child(2)")
              .eq(index)
              // extract age with next()
            .next()
            .then(function (age) {
              const userAge = age.text();
              expect(userAge).to.eq('80');
            });
        }
      });
    });


});
