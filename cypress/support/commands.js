// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.on("uncaught:exception", () => {

    return false;
  });

  import 'cypress-file-upload';
  require('cypress-downloadfile/lib/downloadFileCommand')
  require('@4tw/cypress-drag-drop')


  Cypress.Commands.add('addemployee', (firstanme,lastname) => { 
    
      
    cy.contains('PIM').click()

    cy.contains('Add Employee').click()

    cy.get('input[name="firstName"]').type(firstanme)

    cy.get('input[name="lastName"]').type(lastname)

    cy.get('button[type="submit"]').click()

    cy.contains('Successfully Saved').should("be.visible")

   })


   Cypress.Commands.add('launchapplication', () => {
    
    cy.log("Test Execution Started")

    cy.visit('/web/index.php/auth/login')

   })

   
   

