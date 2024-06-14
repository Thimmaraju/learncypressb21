

describe("Verify Add employee functionality", () => {

    const menuitems ={

        menu1 :"Admin",
        menu2: "PIM",
        menu3: "Leave",
        menu4: "Time",
        menu5: "Recruitment",
        menu6 : "My Info"
    }
    
    const creds = ["Admin", "admin123"]

    it("verify add employee with Mandatory details ", function () {


        cy.visit('/web/index.php/auth/login')

        cy.get('input[name="username"]').type(creds[0])

        cy.get('input[type="password"]').type(creds[3])

        cy.get('button[type="submit"]').click()

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

        for(let i in menuitems){

            cy.contains(menuitems[i]).should("be.visible")
        }
        //cy.get('a[href="/web/index.php/pim/viewPimModule"]>span').click()

        cy.contains('PIM').click()

        cy.contains('Add Employee').click()

        cy.get('input[name="firstName"]').type('Pavan')

        cy.get('input[name="lastName"]').type("Kumar")

        cy.get('button[type="submit"]').click()

        cy.contains('Successfully Saved').should("be.visible")

        //or

        cy.url().should("include", "pim/viewPersonalDetails/empNumber")


       

    })
})