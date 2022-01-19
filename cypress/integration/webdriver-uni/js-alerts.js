///<reference types="cypress" />

describe("Handle js alerts", () => {
  it("Confirm js alert contains the correct text", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    // use invoke(removeattr) to remove the target = _blank so you can open the page on the same same tab
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#button1").click();

    // use 'window:alert' event to accept alerts & retrieve the alert message
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });
    
    it("Validate js confirms alertbox works when clicking  ok", () => {
      cy.visit("http://www.webdriveruniversity.com/");
      // use invoke(removeattr) to remove the target = _blank so you can open the page on the same same tab
      cy.get("#popup-alerts")
        .invoke("removeAttr", "target")
        .click({ force: true });
      cy.get("#button4").click();
      cy.on("window:alert", (str) => {
        return true;
      });
      cy.get("#confirm-alert-text").contains("You pressed OK!");
    });

    it("Validate js confirms alertbox works when clicking  cancel", () => {
      cy.visit("http://www.webdriveruniversity.com/");
      // use invoke(removeattr) to remove the target = _blank so you can open the page on the same same tab
      cy.get("#popup-alerts")
        .invoke("removeAttr", "target")
        .click({ force: true });
      cy.get("#button4").click();
      // use 'window:confirm' event to accept or cancel alerts & retrieve the alert message
      cy.on("window:confirm", (str) => {
        return false;
      });
      cy.get("#confirm-alert-text").contains("You pressed Cancel!");
    });

    it.only('Validate js confirms alertbox using a STUB', () => {
        cy.visit("http://www.webdriveruniversity.com/");

        cy.get("#popup-alerts")
            .invoke("removeAttr", "target")
            .click({ force: true });
        
        const stub = cy.stub();
        cy.on('window:confirm', stub)

        cy.get("#button4").click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;
        }).then(() => {
            cy.get("#confirm-alert-text").contains("You pressed OK!");
        });
    });
});
