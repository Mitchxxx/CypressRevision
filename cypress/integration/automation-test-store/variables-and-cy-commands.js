/// <reference types = "cypress" /> 

// Examples of Chaining Commands

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit("https://www.automationteststore.com/")

        // The following will fail
        // const makeuplink = cy.get('a[href*="product/category&path"]').contains('Makeup')
        // const skincareLink = cy.get('a[href*="product/category&path"]').contains('Skincare')
        // makeuplink.click()
        // skincareLink.click()
        
// The following will pass because Cypress works sequentially
        // const makeuplink = cy.get('a[href*="product/category&path"]').contains('Makeup')
        // makeuplink.click()
        // const skincareLink = cy.get('a[href*="product/category&path"]').contains('Skincare')
        // skincareLink.click()

        // Recommended Approach
        cy.get('a[href*="product/category&path"]').contains('Makeup').click()
       cy.get('a[href*="product/category&path"]').contains('Skincare').click()
    });

    it("Navigating to a specific product page", () => {
        cy.visit("https://www.automationteststore.com/")

        cy.get('a[href*="product/category&path"]').contains('Makeup').click()

        // The following will fail
        // const header = cy.get('h1 .maintext')
        // cy.log(header.text())

        // The following will pass (Using the then promise)
        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found HeaderText: " + headerText)
            expect(headerText).is.eq('Makeup')
        })
    })


})