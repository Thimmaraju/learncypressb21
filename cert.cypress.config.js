const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl:"https://cert.opensource-demo.orangehrmlive.com",
    defaultCommandTimeout:20000,
    pageLoadTimeout: 120000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    videosFolder:"cypress/raju",
    retries: {openMode: 3,runMode:1},
    env:{

       username: "Rerijuaju",
       password: "wieryf7"
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
