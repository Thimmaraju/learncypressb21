Feature: Verify Login functionality

    Verifying login with positive and negative tests

  Background: Launch Application
     Given User launch the Application
Scenario: Verify Login with valid credentials 

  When User enter username "Admin" and password as "admin123"
  And User clicks on login button 
  Then User should be navigated to dashbaord page 

Scenario: Verify login with Valid Username and invalid password 
   

  When User enter username "Admin" and password as "erhgierh"
  And User clicks on login button 
  Then User should get login error message

Scenario: Verify login with invalid Username and valid password 

  When User enter username "erhg" and password as "admin123"
  And User clicks on login button 
  Then User should get login error message

Scenario: Verify login with inalid Username and invalid password 

  When User enter username "Aerhgjredmin" and password as "erhgierh"
  And User clicks on login button 
  Then User should get login error message