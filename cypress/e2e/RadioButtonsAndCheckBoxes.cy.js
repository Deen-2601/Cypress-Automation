/// <reference types="Cypress" />

describe("Check UI elements", ()=>{

    it("Checking Radio Button", ()=>{


        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibility of radio buttons
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        //selecting radio buttons
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')
    })
})