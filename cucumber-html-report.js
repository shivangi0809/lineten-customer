const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "jsonlogs", // ** Path of .json file **//
  reportPath: "./reports/cucumber-report.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "116",
    },
    device: "Local test machine",
    platform: {
      name: "WINDOW"
    },
  },
});
