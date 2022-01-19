/// <reference types="cypress" />

describe("Test mouse actions via webdriveruni", () => {
  // Scroll
  it("Scroll web elements into view", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    // use invoke(removeattr) to remove the target = _blank so you can open the page on the same same tab
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  // Drag and Drop
  it("Should be able to drag and drop a draggable item", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    // use invoke(removeattr) to remove the target = _blank so you can open the page on the same same tab
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    // use trigger to perform mouse actions

    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });

  // Double click
  it(" I Should be able to perform a double mouse click", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    // use invoke(removeattr) to remove the target = _blank so you can open the page on the same same tab
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#double-click").dblclick();
  });

  // Hold down left mouse click button
  it.only("Should be able to hold down the left mouse click button", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    // use invoke(removeattr) to remove the target = _blank so you can open the page on the same same tab
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
      cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .then(($element) => {
        expect($element).to.have.css("background-color", "rgb(0, 255, 0)");
      }).trigger('mouseup', { force: true}).then(($element1) => {
          expect($element1).to.have.css("background-color", "rgb(255, 99, 71)");
      });
  });
});
