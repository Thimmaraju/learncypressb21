const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    //specPattern: "**/*.dbsqa.{js,jsx,ts,tsx}",
    baseUrl:"https://www.cypress.io/",
    defaultCommandTimeout:20000,
    pageLoadTimeout: 120000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    videosFolder:"cypress/raju",
    retries: {openMode: 3,runMode:1},
    env:{

       username: "regiuhryuhf",
       password: "regbj"
    },
    watchForFileChanges: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
