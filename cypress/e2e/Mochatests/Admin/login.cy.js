
import data from "../../fixtures/logincreds.json"

import login from '../../../PageObjects/loginPage.po'
describe('Login functionality', () => {

  const credentials = {

    username:"Admin",
    password:"admin123"
}


beforeEach(()=>{

   cy.launchapplication()
  
  })

  
afterEach(()=>{

  cy.log("Test Execution Completed")

  
  })
  it.only("Verify login's positive test - Valid credentials", () => {

    let username = "Admin"
    let password = "admin123"
    

    cy.xpath(login.inputfiled("username"),{timeout:40000}).type(credentials.username)

    cy.xpath(login.inputfiled("password")).type(credentials.password)

    cy.get(login.loginBtn()).click()

    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    //or

    // cy.contains('Time at Work').should("be.visible")

    // //or

    // cy.contains('Dashboard').should("be.visible")

    

  })


  it('Verify login with Valid username and invalid password', () => {
    
    
    cy.xpath(login.usernameInput(),{timeout:40000}).type("Admin")

    cy.get(login.passwordInput()).type("jgfnkjern")

    cy.get(login.loginBtn()).click()

    cy.xpath("//*[text()='Invalid credentials']").should("be.visible")
  })


  it('Verify login with InValid username and valid password', () => {
    
 
    login.loginwithCreds("ehfuiheru", "admin123")

    cy.contains('Invalid credentials').should("be.visible")
  })

  it('Verify login with InValid username and INvalid password', () => {

    //cy.viewport(414, 896)

    cy.viewport("ipad-2")
    
 
    login.loginwithCreds("sdfisnghre", "krehui")

    cy.contains('Invalid credentials').should("be.visible")
  })

})