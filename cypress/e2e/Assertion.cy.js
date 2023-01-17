const { describe } = require("mocha");

describe('Assertions demo', () =>{

    it('Implicit Assertions', () =>{

        cy.visit("https://www.saucedemo.com/")  //visit the url

        // should  and
        cy.url().should('include', 'saucedemo')
        cy.url().should('eq','https://www.saucedemo.com/')
        cy.url().should('contain','sauce')



    })





})