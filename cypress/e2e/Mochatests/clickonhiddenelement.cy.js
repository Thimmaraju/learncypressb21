

describe("Understand - click on hidden element ", () => {

    it("verify click on hidden click ", () => {


        cy.visit('https://www.cypress.io/')

        cy.get('#dropdownDocs').tigger('mouseover')

        cy.get('a[href="https://on.cypress.io/installing-cypress"]').first().invoke("removeAttr", "target").click({ force: true })


        cy.url().should("eq", "https://docs.cypress.io/guides/getting-started/installing-cypress")

        cy.go(-1) // backwrd 

        cy.go(1)
    })


    it("verify click on buttons serially  ", () => {


        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.xpath("//button [text()='ADD TO CART']").click({ multiple: true })

        // for(let i=0; i<=6; i++){

        //     cy.get('div[class="product-action"] >button').eq(i).click()

        // }

    })


    it("verify paste the text ", () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type('eagnrtjnghltrjioghtrknjgsnghtrilghtrghiutrhgiuhtr', { delay: 0 })



    })

    it("console error example ", () => {

        // Cypress.on("uncaught:exception", () => {

        //     return false;
        // });

        cy.visit('https://practice.automationtesting.in/')

        cy.get('a[href="https://practice.automationtesting.in/shop/"]').first().click()
    })


    it.only("scrollintoview ", () => {

        // Cypress.on("uncaught:exception", () => {

        //     return false;
        // });

        cy.visit('https://docs.cypress.io/api/commands/scrollIntoView')

        cy.get('a[href="https://twitter.com/Cypress_io"]').scrollIntoView()

        cy.wait(1000)

        cy.get('.mainContentHeader_el1s').scrollIntoView()

        
    })
})