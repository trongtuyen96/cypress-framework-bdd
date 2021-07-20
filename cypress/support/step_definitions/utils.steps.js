import { Given, Then, When, And } from 'cypress-cucumber-preprocessor/steps';
const constants = require('../constants');

And('it should run performance audits using Lighthouse', () => {
    cy.lighthouse();
});

And('it should run performance audits using Pa11y', () => {
    cy.pa11y();
});

And('it should run performance audits using custom thresholds', () => {
    const customThresholds = {
        performance: 50,
        accessibility: 50,
        seo: 70,
        'first-contentful-paint': 2000,
        'largest-contentful-paint': 3000,
        'cumulative-layout-shift': 0.1,
        'total-blocking-time': 500,
        interactive: 2000,
        pwa: 50,
    };

    const desktopConfig = {
        formFactor: 'desktop',
        screenEmulation: constants.screenEmulationMetrics.desktop
    };

    cy.lighthouse(customThresholds, desktopConfig);
});