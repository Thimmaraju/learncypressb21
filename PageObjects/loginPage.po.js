class loginPage {

    usernameInput() {

        return '//input[@name="username"]'

    }

    passwordInput() {

        return 'input[name="password"]'

    }

    inputfiled(str){

        return "//input[@name='"+str+"']"

    }

    loginBtn() {

        return 'button[type="submit"]'

    }

    logo() {

        return 'img[alt="company-branding"]'
    }

    loginErrorMessage = 'Invalid credentials'


    loginwithCreds(valu1, valu2) {


        cy.xpath(this.usernameInput(), { timeout: 40000 }).type(valu1)

        cy.get(this.passwordInput()).type(valu2)

        cy.get(this.loginBtn()).click()
    }


}

const login = new loginPage()

export default login