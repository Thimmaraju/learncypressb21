import login from "../../../PageObjects/loginPage.po"
import dashboard from "../../../PageObjects/dashboardPage.po"

import addemployeedata from "../../fixtures/ExceltoJson/addemploye.json"
//import addemployee from "../PageObjects/addEmployeePage.po"

//import addEmployeePage from "../PageObjects/addEmployeePage.po"

//const addemployee = new addEmployeePage()
describe("Verify Add employee functionality", () => {

    const menuitems = {

        menu1: "Admin",
        menu2: "PIM",
        menu3: "Leave",
        menu4: "Time",
        menu5: "Recruitment",
        menu6: "My Info"
    }

    const creds = ["Admin", "admin123"]

    addemployeedata.forEach((data) => {

        it("verify add employee with Mandatory details ", function () {


            cy.visit('/web/index.php/auth/login')

            login.loginwithCreds(creds[0], creds[1])

            cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

            for (let i in menuitems) {

                cy.contains(menuitems[i]).should("be.visible")
            }
            //cy.get('a[href="/web/index.php/pim/viewPimModule"]>span').click()

            // cy.contains(dashboard.pimMenu()).click()

            // addemployee.addEmployee("Sridevi", "S")

            cy.addemployee(data.firstname, data.lastname)

            //or

            cy.url().should("include", "pim/viewPersonalDetails/empNumber")




        })

    })
})