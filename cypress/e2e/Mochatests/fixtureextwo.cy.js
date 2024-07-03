

import login from "../../../PageObjects/loginPage.po"

//import data from "../fixtures/pim/addemployee.json"

describe('Verify Add employee functionality', function() {

    before(function () {
        cy.fixture('pim/addemployee').then(function (data) {
          this.data = data;
        })
      })
   
    it('Verify add employee with Mandotory details', function() {

        cy.log("Test execution started")
      cy.visit("/")
       
       login.loginwithCreds('Admin', "admin123")

        cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        //or

        cy.url().should("include", "/web/index.php/dashboard/index")

        cy.addemployee(this.data.firstname, this.data.lastname)

      })

     
  })