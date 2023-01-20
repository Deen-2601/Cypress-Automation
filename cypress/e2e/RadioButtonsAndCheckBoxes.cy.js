/// <reference types="Cypress" />

describe("Check UI elements", ()=>{

    it("Checking Radio Button", ()=>{


        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')
    })
})