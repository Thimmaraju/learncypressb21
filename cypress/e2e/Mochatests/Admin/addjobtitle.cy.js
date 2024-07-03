import logindata from "../../fixtures/logincreds.json"

import jobtitledata from "../../fixtures/admin/jobtitle.json"

describe('Verify Add job title', () => {

  it('Add job title', () => {
  
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('input[name="username"]',{timeout:40000}).type(Cypress.env("username"))

    cy.get('input[type="password"]').type(logindata.password)

    cy.get('button[type="submit"]').click()

    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    cy.contains('Admin').click()

    cy.contains('Job').click()

    cy.contains('Job Titles').click()
    cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    let randomtext = (Math.random() + 1).toString(36).substring(7);

    cy.get('form > div:nth-child(1) > div > div:nth-child(2) > input').type(jobtitledata.jobtitle+randomtext)

    cy.get('textarea[placeholder="Type description here"]').type(jobtitledata.jobdescription)

    cy.get('button[type="submit"]').click()

    cy.contains('Successfully Saved').should("be.visible")

  })

})