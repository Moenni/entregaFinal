const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://pushing-it.vercel.app/",
    watchForFileChanges:false,
    defaultCommandTimeout: 5000
  
  },
  env:{
    "usuario": "nicomomo1" ,
    "password":"Saibaba321@"
  }
});
