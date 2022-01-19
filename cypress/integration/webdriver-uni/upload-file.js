/// <reference types="cypress" />

describe("Test File Upload via webdriveruni", () => {
   
    it("Upload a file ......", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        // use invoke(removeattr) to remove the target = _blank so you can open the page on the same same tab
        cy.get("#file-upload")
            .scrollIntoView()
            .invoke("removeAttr", "target")
            .click({ force: true });
        // select file from fixture and encode with base64
        cy.fixture("5kg-wristAnkle.jpeg", "base64").then(fileContent => {
            // Upload into the upload element and describe the fileContents
            cy.get('#myFile').attachFile(
                {
                    fileContent,
                    fileName: "5kg-wristAnkle.jpeg",
                    mimeType: "image/jpeg"
                },
                {
                    uploadType: "input"
                }
            )
            cy.get("#submit-button").click();
        })
    });
    
})
