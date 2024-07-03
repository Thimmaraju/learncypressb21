import { Given,Then,When, And } from "cypress-cucumber-preprocessor/steps";

import login from "../../../PageObjects/loginPage.po"

Given("User launch the Application", ()=>{

    cy.visit('/web/index.php/auth/login')
})

When('User enter username {string} and password as {string}', (username, password)=>{

     cy.xpath(login.usernameInput()).type(username)

     cy.get(login.passwordInput()).type(password)
})

And("User clicks on login button", ()=>{

    cy.get(login.loginBtn()).click()
})

Then("User should be navigated to dashbaord page", ()=>{

      cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

      //or

      cy.url().should("include", "web/index.php/dashboard/index")

})

Then('User should get login error message', ()=>{

    cy.contains(login.loginErrorMessage).should("be.visible")
})