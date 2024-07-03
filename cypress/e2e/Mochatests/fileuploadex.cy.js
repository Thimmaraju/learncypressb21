///<reference types="cypress"/>

describe('Automation - File Upload Example', function () {

    it('Cypress Test Case - Understanding upload file- Attachfile', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.get('input[name="upfile"]').attachFile('uploadfiles/B21 Automation Testing classes .txt');
      
      cy.wait(3000)
      cy.xpath('//input[@type="submit"]').click();
    
      cy.contains("The file's contents are:").should("be.visible")
    })


    
    it('Cypress Test Case - Understanding upload file - Select file ', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.xpath('//input[@name="upfile"]').selectFile('D:/LearnCypressb21/cypress/fixtures/uploadfiles/B21 Automation Testing classes .txt');
    

      cy.wait(3000)
      cy.xpath('//input[@type="submit"]').click();
   
    
      cy.contains("The file's contents are:").should("be.visible")
    })
   
    //Import - Uploading file 

    it.only('Cypress Test Case - Understanding download file ', function () {
      let r = (Math.random() + 1).toString(36).substring(7);
      cy.downloadFile("https://istqb-main-web-prod.s3.amazonaws.com/media/documents/ISTQB_CTFL_Syllabus-v4.0.pdf", "cypress/downloads", "istqbsyllabus"+r+".pdf")
      cy.readFile("cypress/downloads/istqbsyllabus"+r+".pdf").should('exist')
    })

    it.only('Cypress Test Case - Understanding download file ', function () {
      
      cy.downloadFile("https://sm.mashable.com/t/mashable_in/photo/default/img-3224_ngeq.1248.jpg","cypress/downloads", "sachin.jpg")
      cy.readFile('cypress/downloads/sachin.jpg').should('exist')
    })

    it('Cypress Test Case - Understanding download file ', function () {
      
      cy.downloadFile("https://cdn.britannica.com/54/75854-050-E27E66C0/Eiffel-Tower-Paris.jpg","cypress/downloads", "tower.jpg")
      cy.readFile('cypress/downloads/tower.jpg').should('exist')
    })

  })