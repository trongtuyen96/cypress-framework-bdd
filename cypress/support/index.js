// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';
import 'cypress-plugin-snapshots/commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

require('cypress-xpath');

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

Cypress.Server.defaults({
    delay: 500,
    force404: false,
    ignore: (xhr) => {
        // handle custom logic for filtering XHR requests
        return true;
    }
});

const options = {
    collectTypes: ['cy:log', 'cy:xhr', 'cy:request', 'cy:route', 'cy:command']
};

require('cypress-terminal-report/src/installLogsCollector')(options);

// fix issue with run all test of cypress-plugin-snapshots
export const fixCypressSpec = filename => () => {
    const path = require('path');
    const relative = filename;
    const projectRoot = Cypress.config('projectRoot');
    const absolute = path.join(projectRoot, relative);
    Cypress.spec = {
        absolute,
        name: path.basename(filename),
        relative
    }
}