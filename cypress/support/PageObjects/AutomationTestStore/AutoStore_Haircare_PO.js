///<reference types = 'cypress' />
class AutoStore_HairCare_PO {
    addCareProductsToBasket() {
       globalThis.data.productName.forEach(function (element) {
         cy.addProductToBasket(element);
       });
        cy.get(".dropdown-toggle > .fa").click;
  }
}

export default AutoStore_HairCare_PO;
