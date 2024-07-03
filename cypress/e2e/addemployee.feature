Feature: Verify Add employee Functionality

    Verifying add employee with positive and negative tests

    Background: Naviagte to Add employee page
        Given User launch the Application
        When User enter username "Admin" and password as "admin123"
        And User clicks on login button
        Then User should be navigated to dashbaord page
        When User clicks on PIM
        And User clicks on add employee submenu

    Scenario Outline: Verify add employee with mandatory details
        And User enter firstname "<firstname>" and lastname "<lastname>"
        And User clicks on save button
        Then User should get success message

        Examples:
            | firstname | lastname |
            | Sridevi   | S        |
            | Pavan     | Kumar    |
            | Raju      | G        |

    Scenario: Verify user can not add employee without mandatory details

        And User clicks on save button
        Then User should get error message for firstname and lastname fields