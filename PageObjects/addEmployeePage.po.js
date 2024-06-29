class addEmployeePage{


    addEmployeeMenu(){

        return "Add Employee"
    }

    firstnameInput = 'input[name="firstName"]'
    lastnameInput = 'input[name="lastName"]'
    saveBtn = 'button[type="submit"]'
    successMessage = 'Successfully Saved'


    addEmployee(firstname, lastname){

        //cy.contains(this.addEmployeeMenu()).click()

        cy.get(this.firstnameInput).type(firstname)

        cy.get(this.lastnameInput).type(lastname)

        cy.get(this.saveBtn).click()

        cy.contains(this.successMessage).should("be.visible")
    }

}

const addemployee = new addEmployeePage()

export default addemployee