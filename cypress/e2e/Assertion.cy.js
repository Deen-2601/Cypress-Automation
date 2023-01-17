

describe('Assertions demo', () =>{

    it('Implicit Assertions', () =>{

        cy.visit("https://www.saucedemo.com/")  //visit the url

        // should  and
        cy.url().should('include', 'saucedemo')
        cy.url().should('eq','https://www.saucedemo.com/')
        cy.url().should('contain','sauce')

        cy.title().should('include', 'SWAG')
        .and('eq', 'SWAGLABS')
        .and('notcontain', 'Baba')



    })



    it('Explicit Assertions', () =>{

        cy.visit("https://www.saucedemo.com/")  //visit the url
        
        cy.get("#user-name").type("standard_user") //type in the username
    
        cy.get("#password").type("secret_sauce") //type in the password
        
        cy.get("[name='login-button']").click() //click the Login button

        let expName = 'xyz';
        
        cy.get("inventory_item_name").then( (x)=>{

                let actName=x.text()
                
                //BDD style
                expect(actName).to.equal(expName)
                expect(actName).to.not.equal(expName)

                //TDD style
                assert.equal(actName,expName)
                assert.notEqual(actName,expName)



        })
    })


})