import login from "../../../PageObjects/loginPage.po"
describe("Buzz Module Verification", () => {

    it("verify user can do a posting in whats on your mind", () => {

        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
        cy.get('input[name^="chk_altemail"]').check().should('be.checked')

        //cy.get('input[name^="chk_altemail"]').should('be.checked')

        cy.wait(2000)
        cy.get('input[name^="chk_altemail"]').uncheck().should('not.be.checked')

    })

    it("verify user can do a posting in whats on your mind", () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        login.loginwithCreds("Admin", "admin123")

        cy.contains("PIM").click()

        // will check all matching check boxes
        cy.get('input[type="checkbox"]').check(["0", "2", "4"], { force: true })

        cy.wait(4000)

        cy.get('input[type="checkbox"]').uncheck(["0", "2", "4"], { force: true })



    })

    it("verify user can do a posting in whats on your mind", () => {

        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')

        cy.get('input[value="m"]').should('be.checked')
        //or
        cy.get('input[value="m"]').should("have.attr", "checked", "checked")

        cy.wait(1000)
        cy.get('input[value="f"]').click().should('be.checked')
        cy.get('input[value="m"]').should('not.be.checked')

    })

    it.only("verify user can do a posting in whats on your mind", () => {

        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')


        //text
        cy.get('select[name^="DOB_Month"]').select("OCT")
        cy.get('select[name^="DOB_Month"]').should("have.value", "10")


        //value
        cy.get('select[name^="DOB_Month"]').select("07")

        //index
        cy.get('select[name^="DOB_Month"]').select(4)


       

    })



})