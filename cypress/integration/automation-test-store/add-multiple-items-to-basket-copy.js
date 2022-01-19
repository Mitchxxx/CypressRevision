/// <reference types = 'cypress' />

import AutoStore_HomePage_PO from '../../support/PageObjects/AutomationTestStore/AutoStore_HomePage_PO'
import AutoStore_HairCare_PO from '../../support/PageObjects/AutomationTestStore/AutoStore_Haircare_PO'
describe("Add multiple items to basket", () => {
  const autoStore_HomePage_PO = new AutoStore_HomePage_PO()
  const autoStore_HairCare = new AutoStore_HairCare_PO()

  before(function () {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });
  beforeEach(function () {
    // Use methods from AutoStore_Homepage PageObject class
    autoStore_HomePage_PO.accessHomePage()
    autoStore_HomePage_PO.clickOn_HairCare_Link()
  });
    it("Add specific items to basket", () => { 
        autoStore_HairCare.addCareProductsToBasket();
    });
   
});
