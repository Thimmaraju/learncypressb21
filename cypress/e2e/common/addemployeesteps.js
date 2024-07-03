
import { Given,Then,When, And } from "cypress-cucumber-preprocessor/steps";
import addemployee from "../../../PageObjects/addEmployeePage.po"

When('User clicks on PIM', ()=>{

    cy.contains("PIM").click()
})

And('User clicks on add employee submenu', ()=>{

    cy.contains("Add Employee").click()
})


And('User enter firstname {string} and lastname {string}', (firstname, lastname)=>{

    cy.get(addemployee.firstnameInput).type(firstname)
    cy.get(addemployee.lastnameInput).type(lastname)
})


And('User clicks on save button', ()=>{
  
    cy.get(addemployee.saveBtn).click()

})

Then('User should get success message', ()=>{

    cy.contains(addemployee.successMessage).should("be.visible")
})


Then("User should get error message for firstname and lastname fields", ()=>{

    cy.contains("Required").should("be.visible")
})
