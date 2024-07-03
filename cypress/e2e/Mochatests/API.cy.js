import addemployeedata from "../../fixtures/payload.json"

import emp from "../../../PageObjects/sample.po"
describe("API Test automation", ()=>{


     it("Verify List of users API", ()=>{

        cy.request("GET", "https://reqres.in/api/users?page=2").then((response)=>{

            expect(response.status).to.equal(200)

            cy.writeFile("cypress/fixtures/response.txt", response)
        })


     })

     it("Verify Create user API", ()=>{

        cy.request("POST", "https://reqres.in/api/users", {
            "name": "Raju",
            "job": "Trainer"
        }).then((response)=>{

            expect(response.status).to.equal(201)

            cy.writeFile("cypress/fixtures/response2.txt", response)
        })


     })

     it("Verify Add Employee API", ()=>{

        let r = (Math.random() + 1).toString(36).substring(7);
        addemployeedata.employeeId= "emp"+r

        addemployeedata.firstName = emp.firnameinput
        cy.request({
           method: "POST",
           url: "/web/index.php/api/v2/pim/employees",
           headers:{

               "Cookie": Cypress.env('cookivalue'),
               "Referer": "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"
           },
           body:addemployeedata

        }).then((response)=>{

            expect(response.status).to.equal(200)

            expect(response.body.data.lastName).to.equal("K")

            var firsrname = JSON.stringify(response.body.data.firstName)

            cy.log(firsrname)

            cy.writeFile("cypress/fixtures/response3.txt", response)
        })


     })

     it("Verify Add Employee API", ()=>{

        let r = (Math.random() + 1).toString(36).substring(7);
        addemployeedata.employeeId= "emp"+r
        cy.request({
           method: "POST",
           url: "/web/index.php/api/v2/pim/employees",
           headers:{

               "Cookie": Cypress.env('cookivalue'),
               "Referer": "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"
           },
           body:addemployeedata

        }).then((response)=>{

            expect(response.status).to.equal(200)

            expect(response.body.data.lastName).to.equal("K")

            var firsrname = JSON.stringify(response.body.data.firstName)

            cy.log(firsrname)

            cy.writeFile("cypress/fixtures/response3.txt", response)
        })


     })
})