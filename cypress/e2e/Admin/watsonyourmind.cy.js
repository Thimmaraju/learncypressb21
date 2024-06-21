

describe("Buzz Module Verification", ()=>{

    it("verify user can do a posting in whats on your mind", ()=>{

        
    cy.visit('/web/index.php/auth/login')

    cy.get(login.usernameInput()).type("Admin")

    cy.get(login.passwordInput()).type("admin123")

    cy.get(login.loginBtn()).click()

    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    cy.get('a[href="/web/index.php/buzz/viewBuzz"] > span').click()

    cy.get(`textarea[placeholder="What's on your mind?"]`).type("Hi Good morning to Everyone!")

    cy.get('button[type="submit"]').click()
    cy.reload()
    cy.contains('Hi Good morning to Everyone!').should("be.visible")
    })
})