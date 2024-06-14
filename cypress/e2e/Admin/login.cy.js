import data from "../../fixtures/logincreds.json"
describe('Login functionality', () => {

  const credentials = {

    username:"Admin",
    password:"admin123"
}


  it("Verify login's positive test - Valid credentials", () => {

    let username = "Admin"
    let password = "admin123"
    
    cy.visit('/web/index.php/auth/login')

    str= "/web/index.php/auth/login"

    if(url == "/web/index.php/auth/login"){

      

    cy.get('input[name="usernamebhjbjhb"]',{timeout:40000}).type(credentials.Username)

    cy.get('input[type="password"]').type(credentials.password)

    cy.get('button[type="submit"]').click()

    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    //or

    // cy.contains('Time at Work').should("be.visible")

    // //or

    // cy.contains('Dashboard').should("be.visible")

    }

  })


  it('Verify login with Valid username and invalid password', () => {
    
    cy.visit('/web/index.php/auth/login')

    cy.get(`input[name='username']`).type(`Admin`)

    cy.get('input[type="password"]').type("kerfhyuerhuio")

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should("be.visible")
  })


  it('Verify login with InValid username and valid password', () => {
    
    cy.visit('/web/index.php/auth/login')

    cy.get('input[name="username"]').type("yhfuerhfyu")

    cy.get('input[type="password"]').type("admin123")

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should("be.visible")
  })

  it('Verify login with InValid username and INvalid password', () => {

    //cy.viewport(414, 896)

    cy.viewport("ipad-2")
    
    cy.visit('/web/index.php/auth/login')

    cy.get('input[name="username"]').type("yhfuerhfyu")

    cy.get('input[type="password"]').type("erugtuy")

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should("be.visible")
  })

})