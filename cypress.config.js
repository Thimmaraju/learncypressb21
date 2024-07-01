const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    projectId: "mjq6je",
    baseUrl:"https://opensource-demo.orangehrmlive.com",
    defaultCommandTimeout:20000,
    pageLoadTimeout: 120000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    experimentalSessionAndOrigin:true,
    videosFolder:"cypress/raju",
    //retries: {openMode: 1,runMode:1},
    env:{

       username: "Admin",
       password: "admin123",
       "allureResultsPath": "allure-results",
    },
    "watchForFileChanges":false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      on('task', {downloadFile})
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config);
      return config;
    },
  },
});
