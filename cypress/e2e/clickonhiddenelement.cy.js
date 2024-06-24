

describe("Understand - click on hidden element ", ()=>{

    it("verify click on hidden click ", ()=>{


        cy.visit('https://www.cypress.io/')

        cy.get('a[href="https://on.cypress.io/installing-cypress"]').first().click({force: true})

      

    })


    it("verify click on buttons serially  ", ()=>{


        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.xpath("//button [text()='ADD TO CART']").click({ multiple: true })

        // for(let i=0; i<=6; i++){
     
        //     cy.get('div[class="product-action"] >button').eq(i).click()

        // }

    })


    it.only("verify paste the text ", ()=>{

       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

       cy.get('input[name="username"]').type('eagnrtjnghltrjioghtrknjgsnghtrilghtrghiutrhgiuhtr', {delay:0})

       

    })





})