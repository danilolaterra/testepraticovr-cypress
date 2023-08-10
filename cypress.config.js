const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
  viewportHeight: 900,
  viewportWidth: 1440,
  defaultCommandTimeout: 5000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://www.vr.com.br',
  },
})
