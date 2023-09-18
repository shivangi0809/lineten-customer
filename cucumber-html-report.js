const report = require("multiple-cucumber-html-reporter");
report.generate({
  reportPath: "./cucumber-report.html",
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
