const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.lawvu.com/careers",
    viewportWidth: 1920,
    viewportHeight: 1080,  
    trashAssetsBeforeRuns: true,
    screenshotOnRunFailure: true,
    watchForFileChanges: false
  },
});
