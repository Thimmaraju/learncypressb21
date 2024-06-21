
import moment from "moment"
describe("Buzz Module Verification", ()=>{

    it("verify user can do a posting in whats on your mind", ()=>{

        cy.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

        cy.log(moment().format('dddd'))

        cy.visit("https://www.google.com/")

    })


})