/// <reference types="cypress" />

describe("Hadling Date picker via webdriver-uni", () => {
  // Scroll
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com/");
    // use invoke(removeattr) to remove the target = _blank so you can open the page on the same same tab
    cy.get("#datepicker")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
  });

    it("Select Date from date pickers", () => {

        cy.get('#datepicker').click()
    //   let date = new Date();
    //   date.setDate(date.getDate()); // Get the current day i.e 4
    //   cy.log(date.getDate());

    //   let date2 = new Date();
    //   date2.setDate(date2.getDate() + 5); // Get the current day i.e 4 +5 = 9
    //   cy.log(date2.getDate());
        
        var date = new Date();
        date.setDate(date.getDate() + 409)
        
        // Create a future year, month & day

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", { month: "long" })
        var futureDay = date.getDate();

        cy.log("Future year to select: " + futureYear)
        cy.log("Future month to select: " + futureMonth);
        cy.log("Future day to select: " + futureDay);
        cy.get(".input-group-addon").click();
        function selectMonthAndYear() {           
            cy.get(".datepicker-dropdown")
              .find(".datepicker-switch")
              .first()
              .then(currentDate => {
                if (!currentDate.text().includes(futureMonth)) {
                  cy.get(".next").first().click();
                  selectMonthAndYear();
                }
              });
        };

        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click()
        }
        // Call function to select month and year
        selectMonthAndYear();
        // call function to select Day
        selectFutureDay();
    })
    });