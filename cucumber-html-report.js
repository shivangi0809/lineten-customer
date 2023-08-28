const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "jsonlogs", // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "115.0.5790.170",
    },
    device: "Local test machine",
    platform: {
      name: "MAC",
      version: "Ventura 13.5",
    },
  },
});
