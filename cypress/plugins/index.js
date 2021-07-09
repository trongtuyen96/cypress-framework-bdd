/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const cucumber = require('cypress-cucumber-preprocessor').default

const path = require('path');

const { initPlugin } = require('cypress-plugin-snapshots/plugin');

const { lighthouse, pa11y, prepareAudit } = require('cypress-audit');

const fs = require('fs');


/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // include cucumber processor
  on('file:preprocessor', cucumber())

  // for cypress-mochawesome-reporter
  require('cypress-mochawesome-reporter/plugin')(on);

  // for cypress-terminal-report
  const options = {
    printLogsToFile: 'always',
    printLogsToConsole: 'onFail',
    outputRoot: config.projectRoot + '/cypress/logs/',
    specRoot: path.relative(config.fileServerFolder, config.integrationFolder),
    outputTarget: {
      'cypress-logs|txt': 'txt',
      'cypress-logs|json': 'json'
    }
  };
  require('cypress-terminal-report/src/installLogsPrinter')(on, options);

  // for cypress-plugin-snapshots
  initPlugin(on, config);

  // for cypress-audit with lighthouse, pa11y
  on('before:browser:launch', (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on('task', {
    lighthouse: lighthouse((lighthouseReport) => {
      let lighthouseReportString = JSON.stringify(lighthouseReport);
      fs.writeFile('cypress/reports/lighthouse/report.json', lighthouseReportString, (err) => {
        if (err) {
          throw err;
        }
        console.log("Lighthouse report is saved");
      });
    }),
    pa11y: pa11y((pa11yReport) => {
      let pa11yReportString = JSON.stringify(pa11yReport);
      fs.writeFile('cypress/reports/pa11y/report.json', pa11yReportString, (err) => {
        if (err) {
          throw err;
        }
        console.log("Pa11y report is saved");
      });
    })
  });
}
