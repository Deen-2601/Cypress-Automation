describe('CSS Locators', () =>{


it("csslocators", () =>{


    cy.visit("https://www.saucedemo.com/")  //visit the url

    cy.get("#user-name").type("standard_user") //type in the username
    
    cy.get("#password").type("secret_sauce") //type in the password
    
    cy.get("[name='login-button']").click() //click the Login button
})




})