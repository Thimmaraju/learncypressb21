const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    baseUrl:"https://opensource-demo.orangehrmlive.com",
    defaultCommandTimeout:20000,
    pageLoadTimeout: 120000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    videosFolder:"cypress/raju",
    retries: {openMode: 1,runMode:1},
    env:{

       username: "Admin",
       password: "admin123"
    },
    "watchForFileChanges":false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
