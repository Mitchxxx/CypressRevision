/// <reference types = 'cypress' />
describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('a[href*="product/category&path"]').contains("Hair Care").click();
      // Use 'invoke' to invoke a function
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get("@productThumbnail").should("include", "Seaweed Conditioner");

    });

    it("Validate product thumbnail", () => {
      cy.visit("https://www.automationteststore.com/");

        // Use 'As' to assign an alias
        cy.get(".thumbnail").as("productThumbnail");
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get("@productThumbnail")
            // Use 'find' to find Child elements withing Parent elements
          .find(".productcart")
          .invoke("attr", "title")
          .should("include", "Add to Cart");
      
    });


    it.only("Calculate the total of normal and sale products", () => {
      cy.visit("https://www.automationteststore.com/");

        cy.get(".thumbnail").as("productThumbnail");
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     if ($el.text().includes('')) {
        //         cy.log($el.text())
        //     }
        // })
        var itemsTotal = 0;
        // Combining 'find' + 'invoke' and 'as'
        // Non-Sale items
        cy.get(".thumbnail").find(".oneprice").invoke('text').as('itemPrice')
        // Sale Items
        cy.get(".thumbnail").find(".pricenew").invoke("text").as("newPrice");
        cy.get('@itemPrice').then($linkText => {
            // Use 'split' to remove $ from the itemPrice
            var itemPriceTotal = 0;
            var itemPrice = $linkText.split('$');
            var i;
            for (i = 0; i < itemPrice.length; i++) {
                // output the prices without $ sign
                cy.log(itemPrice[i])
                itemPriceTotal += Number(itemPrice[i])
                
            }
            itemsTotal += itemPriceTotal;;
            cy.log("Non Sale price items total = " + itemPriceTotal);
        })

        cy.get("@newPrice").then(($linkText) => {
          // Use 'split' to remove $ from the itemPrice
          var newPriceTotal = 0;
          var newPrice = $linkText.split("$");
          var i;
          for (i = 0; i < newPrice.length; i++) {
            // output the prices without $ sign
            cy.log(newPrice[i]);
            newPriceTotal += Number(newPrice[i]);
          }
          itemsTotal += newPriceTotal;
            cy.log("Sale items price total = " + newPriceTotal);
            
        })
            .then(() => {
                cy.log("The total of all products = " + itemsTotal);
                expect(itemsTotal).to.equal(648.5)
        })
    });

})
 