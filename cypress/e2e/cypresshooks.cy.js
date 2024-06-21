
describe("Test Suite Name ", ()=>{

    
    after(()=>{

        cy.log("This should print After all it blocks")

    })

    beforeEach(()=>{

        cy.log("This should print Before Each test body")

    })

    afterEach(()=>{

        cy.log("This should print After Each test body")

    })

    before(()=>{

        cy.log("This should print Before 1st it body")

    })

    specify("Test Case Name 1 ", ()=>{

        cy.log("This is 1st Test case Body")

    })

    
    specify.skip("Test Case Name 2 ", ()=>{

        cy.log("This is 2nd Test case Body")
    })

    
    specify("Test Case Name 3 ", ()=>{

        cy.log("This is 3rd Test case Body")

    })

})