///<reference types="cypress" />

describe("Handling iFrame & Modals", () => {
  it("Confirm js alert contains the correct text", () => {
      cy.visit("http://www.webdriveruniversity.com/");
      // use invoke(removeattr) to remove the target = _blank so you can open the page on the same same tab
      cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });
    
      // 
      cy.get('#frame').then($iframe => {
          // find the body of the Iframe
          const body = $iframe.contents().find('body')

          // wrap with cy.wrap and use Alias iframe
          cy.wrap(body).as('iframe')
      })
      // Use Alias to call cypress commands to interact with the elements
      cy.get("@iframe").find("#button-find-out-more").click();
      cy.get("@iframe").find("#myModal").as('modal');
      cy.get('@modal').should(($expectedText) => {
          // use Jquery method text() to retrieve text from modal
          const text = $expectedText.text()
          expect(text).to.include(
              "Welcome to webdriveruniversity.com we sell a wide range of electrical goods"
          );
          
      });
      cy.get("@modal").contains("Close").click();
      })
  });