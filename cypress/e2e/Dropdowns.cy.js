
describe('Handle dropdowns', () =>{

    itskip('Dropdown with select', () =>{

        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        cy.get('#zcf_address_country').select('Nigeria')
        .should('have.value','Nigeria')

        cy.get('#zcf_users').select('Selling on marketplaces')
        .should('have.value','Selling on marketplaces')



    })

    it('Dropdown without select', () =>{

        cy.visit("https://www.dummytitcket.com/dummy-ticket-for-visa-application/")

        cy.get('#select2-billing').select('Nigeria')
        .should('have.value','Nigeria')

        cy.get('#zcf_users').select('Selling on marketplaces')
        .should('have.value','Selling on marketplaces')



    })


})