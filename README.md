<h1 align="center">
  <br>
  <a><img src="https://github.com/trongtuyen96/cypress-framework-bdd/blob/ce94a0a9652fead7594800448ae5b147471bc1cc/covers/ATWT_background.PNG" alt="background"></a>
  <a><img src="https://github.com/trongtuyen96/cypress-framework-bdd/blob/ce94a0a9652fead7594800448ae5b147471bc1cc/covers/badge.png" alt="badge" width="800px"></a>
</h1>

<h3 align="center" style="bold">An automation testing framework based on Cypress for REST API and WebUI testing using Page Object Model, Cucumber BDD, Mocha, Lighthouse and CI intergrated with Github Actions, CircleCI, GitlabCI and Bitbucket Pipelines.</h3>

<p align="center">
  <a alt="CircleCI" href="https://app.circleci.com/pipelines/github/trongtuyen96/cypress-framework-bdd">
    <img src="https://circleci.com/gh/trongtuyen96/cypress-framework-bdd.svg?style=svg&circle-token=7400bd5a15daed35237400a49b510ad756a005a0">
  </a>
  <a alt="TravisCI" href="https://app.travis-ci.com/github/trongtuyen96/cypress-framework-bdd">
    <img src="https://travis-ci.com/trongtuyen96/cypress-framework-bdd.svg?branch=main">
  </a>
  <a alt="GitlabCI" href="https://gitlab.com/trongtuyen96/cypress-framework-bdd/-/pipelines">
    <img src="https://gitlab.com/trongtuyen96/cypress-framework-bdd/badges/main/pipeline.svg">
  </a>
  <a alt="CypressFrameworkBDD" href="https://dashboard.cypress.io/projects/ukewho/runs">
    <img src="https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ukewho/main&style=flat&logo=cypress">
  </a>
  <a alt="GitHub Actions - Main" href="https://github.com/trongtuyen96/cypress-framework-bdd/actions/workflows/main.yml">
    <img src="https://github.com/trongtuyen96/cypress-framework-bdd/actions/workflows/main.yml/badge.svg">
  </a>
  <a alt="GitHub Actions - Sync Bitbucket" href="https://github.com/trongtuyen96/cypress-framework-bdd/actions/workflows/sync-bitbucket-https.yml">
    <img src="https://github.com/trongtuyen96/cypress-framework-bdd/actions/workflows/sync-bitbucket-https.yml/badge.svg">
  </a>
  <a alt="GituUb Actions - Sync Gitlab" href="https://github.com/trongtuyen96/cypress-framework-bdd/actions/workflows/sync-gitlab-https.yml">
    <img src="https://github.com/trongtuyen96/cypress-framework-bdd/actions/workflows/sync-gitlab-https.yml/badge.svg">
  </a>
</p>


## Table of Contents

- [Changelogs](#changelogs)
- [Features](#features)
- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Write Test](#write-test)
- [Set Up](#set-up)
- [Author](#author)
- [License](#license)

## Changelogs

:star: 05/07/2021: Add cypress-mochawesome-reporter for generating HTMl report

:star: 06/07/2021: Add cypress-multi-reporters for generating both Junit and Mocha reports

:star: 07/07/2021: Add cypress-plugin-snapshot for comparing snapshots

:star: 09/07/2021: Add cypress-audit with Lighthouse and Pa11y for performance testing

:star: 11/07/2021: Add CircleCI with cypress Docker images

:star: 12/07/2021: Add CircleCI with conditional workflows

:star: 13/07/2021: Add store_artifacts to store test result reports

:star: 15/07/2021: Add Github Workflows

:star: 17/07/2021: Add Gitlab CI

:star: 19/07/2021: Add Github Workflows to pull code from Github and sync to Bitbucket

:star: 20/07/2021: Add Github Workflows to pull code from Github and sync to Gitlab

:star: 24/07/2021: Update parallel run with Cypress Dashboard

:star: 31/07/2021: Add TravisCI

## Features

:gear: Testing across REST API and Web UI applications

:gear: Multiple browser automation

:gear: Multiple reports (JSON, html) with failed screenshots attached

:gear: CI integrated (CircleCI, Github Actions, GitlabCI, Bitbucket Pipelines)

:gear: Performance testing with Lighthouse and Pa11y

:gear: Visual regression testing supported

:gear: Page Object Model with Cucumber BDD

:gear: Parallel runs with CI provider

:gear: Parallel runs with Cypress Dashboard

:gear: And other functions inherited from Cypress


## Installation

Use npm to install the dependencies

```bash
    npm install
```

## Basic Usage

#### Open cypress

```bash
    npx cypress open
```

#### Run all features

```bash
    npx cypress run 
```

#### Run all features on specific browser

```bash
    npx cypress run --browser firefox
```

#### Run all features on headless mode

```bash
    npx cypress run --headless
```

#### Run a specific feature file

```bash
    npx cypress run --spec cypress/integration/{featurefile.feature}
```

#### Run multiple feature files

```bash
    npx cypress run --spec "cypress/integration/webtest/*.feature"  --browser chrome
```

More details: https://docs.cypress.io/guides/guides/command-line

## Write test

#### Write BBD Test Case

- Head to cypress/integration and create new .feature file
- Specify the steps with BDD keywords (Feature, Scenario, Given, When, And, Then, ...)

<p align="center">
    <img src="https://github.com/trongtuyen96/cypress-framework-bdd/blob/9203c494a88fc47cede2c089d2f6519a78f1d859/covers/write_test_1.png" width="500px">
</p>

<p align="center">
    <img src="https://github.com/trongtuyen96/cypress-framework-bdd/blob/9203c494a88fc47cede2c089d2f6519a78f1d859/covers/write_test_2.png" width="500px">
</p>

#### Add locator file for pages in test

- Head to cypress/support/locators and create new .locators.js file
- Define locators and export those elements

<p align="center">
    <img src="https://github.com/trongtuyen96/cypress-framework-bdd/blob/9203c494a88fc47cede2c089d2f6519a78f1d859/covers/write_test_3.png" width="500px">
</p>

#### Add page files with methods

- Head to cypress/support/pages and create new .page.js file
- Call the locators of pages by require(<path to locator file>)
- Write methods that supports your test validations/actions
	
<p align="center">
    <img src="https://github.com/trongtuyen96/cypress-framework-bdd/blob/329b19a81ad59e629dce8003de63d469a1b7a782/covers/write_test_4.png" width="500px">
</p>
	
#### Define steps for each feature
	
- Head to cypress/support/step_definitions and create new .steps.js file
- Write test steps with methods defined in .pages.js file
	
<p align="center">
    <img src="https://github.com/trongtuyen96/cypress-framework-bdd/blob/329b19a81ad59e629dce8003de63d469a1b7a782/covers/write_test_5.png" width="500px">
</p>
	
## Set Up
	
### Multiple reports option
	
1. Install cypress-multi-reporters
```bash
    npm install --save-dev cypress-multi-reporters
```
2. Install cypress-mochawesome-reporter and mocha-junit-reporter
```bash
    npm install --save-dev cypress-mochawesome-reporter,mocha-junit-reporter
```
3. Config reporter in cypress.json
    - Define the reports we want to use by "reporterEnabled" tag
    - For Mocha Junit Report:
        - "mochaFile" to define the output report structure
        - [hash] to generate hash string which helps distinquish report files
        - "jenkinsMode" to generate more beautiful report displayed on Jenkins
    - For Mochawesome Report:
        - "chart" to include chart counts
        - "reportPageTitle" to specify report title
        - "reportFilename" and "reportDir" to specify name and locations of output reports
        - "embeddedScreenshots" to attach screenshots for failed cases
        - "timestamp" to append timestamp to report name, prevent replacement

<p align="center">
    <img src="https://github.com/trongtuyen96/cypress-framework-bdd/blob/329b19a81ad59e629dce8003de63d469a1b7a782/covers/reports.png" width="500px">
</p>
	
4. After executions, reports are located in cypress/reports
5. Head to <a href="https://www.npmjs.com/package/cypress-multi-reporters">cypress-multi-reporters</a> for more configurations

### Visual regression testing
	
1. Install cypress-pugin-snapshots
```bash
    npm install --save-dev cypress-plugin-snapshots
```
2. Add this config to cypress.json file
```bash
    "ignoreTestFiles": [
      "**/__snapshots__/*",
      "**/__image_snapshots__/*"
    ]
```
3. Modify /plugin/index.js with 
```bash
    const { initPlugin } = require('cypress-plugin-snapshots/plugin');

    module.exports = (on, config) => {
        initPlugin(on, config);
    }
```
4. Import this into /support/index.js
```bash
    import 'cypress-plugin-snapshots/commands';
```
5. Config the settings
<p align="center">
    <img src="https://github.com/trongtuyen96/cypress-framework-bdd/blob/025be01e7befa40b673feeabed466c3cf3d3ea13/covers/snapshots.png" width="300px">
</p>

6. Take snapshot
```bash
    cy.toMatchSnapshot();

    cy.get(<element>).toMatchSnapshot();
```
7. Run the test the first time to get the base snapshots

8. To update snapshots when there are changes where expected
```bash
    npx cypress run --env updateSnapshots=true --spec cypress/integration/webtest/Login.feature --browser chrome
```

9. Head to <a href="https://www.npmjs.com/package/cypress-plugin-snapshots">cypress-plugin-snapshots</a> for more configurations
	
### Performance Testing with Google Lighthouse and Pa11y
	
1. Install cypress-audit
```bash
    npm install --save-dev cypress-audit
```
2. Set up prepareAudit when brower launch in /plugin/index.js
```bash
    on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions); });
```
3. Set up task to write test result into report files
4. Use cy.lighthouse() or cy.pa11y() to run performance testing

<p align="center">
    <img src="https://github.com/trongtuyen96/cypress-framework-bdd/blob/329b19a81ad59e629dce8003de63d469a1b7a782/covers/performance.png" width="500px">
</p>

5. After executions, reports are located in cypress/reports

### BDD Test Cases with Cucumber
	
1. Install cypress-cucumber-preprocessor
```bash
    npm install --save-dev cypress-cucumber-preprocessor
```
2. Set up processor in /plugin/index.js
```bash
    const cucumber = require('cypress-cucumber-preprocessor').default

    module.exports = (on, config) => {
        on('file:preprocessor', cucumber())
    }
```
3. Add config for test files in cypress.json
```bash
    {
    "testFiles": "**/*.feature"
    }
```
4. Feature test file can be executed via Cypress Test Runner or via Commands
5. Head to <a href="https://www.npmjs.com/package/cypress-cucumber-preprocessor</a> for more configurations

### Parallel run with CI provider and Cypress Dashboard

<p align="center">
Cypress Dashboard
	<br>
    <a alt="CypressFrameworkBDD" href="https://dashboard.cypress.io/projects/ukewho/runs">
        <img src="https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ukewho/main&style=flat&logo=cypress">
    </a>
</p>
		
CI | Build status | Config File | Set up Cypress Dashboard
:--- | :--- | :--- | :---
CircleCI | [![CircleCI](https://circleci.com/gh/trongtuyen96/cypress-framework-bdd.svg?style=svg&circle-token=7400bd5a15daed35237400a49b510ad756a005a0)](https://app.circleci.com/pipelines/github/trongtuyen96/cypress-framework-bdd) | [config.yml](.circleci/config.yml) | Already set up with CYPRESS_RECORD_KEY as enviroment variable in CircleCI
CircleCI - v2 Config without Orbs| Not activated | [.circleci/config-without-orbs.yml](config-without-orbs.yml) | Already set up with CYPRESS_RECORD_KEY as enviroment variable in CircleCI
TravisCI | [![TravisCI](https://travis-ci.com/trongtuyen96/cypress-framework-bdd.svg?branch=main)](https://app.travis-ci.com/github/trongtuyen96/cypress-framework-bdd) | [.travis.yml](.travis.yml) | Comment out code lines with record on Cypress Dashboard
GitlabCI | [![GitlabCI](https://gitlab.com/trongtuyen96/cypress-framework-bdd/badges/main/pipeline.svg)](https://gitlab.com/trongtuyen96/cypress-framework-bdd/-/pipelines) | [.gitlab-ci.yml](.gitlab-ci.yml) | Comment out code lines with record on Cypress Dashboard
Github Actions | [![Github - Main](https://github.com/trongtuyen96/cypress-framework-bdd/actions/workflows/main.yml/badge.svg)](https://github.com/trongtuyen96/cypress-framework-bdd/actions/workflows/main.yml) | [main.yml](.github/workflows/main.yml) | Comment out code lines with record on Cypress Dashboard
Github Actions - Sync Bitbucket | [![Github - Sync Bitbucket](https://github.com/trongtuyen96/cypress-framework-bdd/actions/workflows/sync-bitbucket-https.yml/badge.svg)](https://github.com/trongtuyen96/cypress-framework-bdd/actions/workflows/sync-bitbucket-https.yml) | [sync-bitbucket-https.yml](.github/workflows/sync-bitbucket-https.yml) | To sync code to Bitbucket
Github Actions - Sync Gitlab | [![Github - Sync Gitlab](https://github.com/trongtuyen96/cypress-framework-bdd/actions/workflows/sync-gitlab-https.yml/badge.svg)](https://github.com/trongtuyen96/cypress-framework-bdd/actions/workflows/sync-gitlab-https.yml) | [sync-gitlab-https.yml](.github/workflows/sync-gitlab-https.yml) | To sync code to Gitlab
	
## Author
	
<h4 align="center">
	Tuyen Nguyen - Senior QA Automation Engineer
</h4>
    <h5 align="center">
	<a href="trongtuyen96@gmail.com">trongtuyen96@gmail.com</a>
    </h5>
<p align="center">
	 <a alt="Github" href="https://github.com/trongtuyen96">
    <img src="https://user-images.githubusercontent.com/25218255/47360756-794c1f00-d6fa-11e8-86fa-7b1c2e4dda92.png" width="50">
  </a>
		 <a alt="LinkedIn" href="https://www.linkedin.com/in/tuyennguyen96/">
    <img src="https://user-images.githubusercontent.com/25218255/47360366-8583ac80-d6f9-11e8-8871-219802a9a162.png" width="50">
  </a>
		 <a alt="Facebook" href="https://www.facebook.com/tuyen.trong.3">
    <img src="https://user-images.githubusercontent.com/25218255/47360363-84eb1600-d6f9-11e8-8029-818481536200.png" width="50">
  </a>
</p>

## License
	
~~~~
Copyright 2021 Tuyen Nguyen

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
~~~~

