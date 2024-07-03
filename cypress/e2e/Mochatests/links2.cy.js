

describe("suitename", () => {


    it("test cae 1", () => {

        cy.visit('https://trello.com/')

        cy.get('a[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]').click()

        cy.origin('https://id.atlassian.com', () => {

            cy.get('#username').type("rajutester2673@gmail.com")

            cy.get('#login-submit').click()
        })

        

    })
})