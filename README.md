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
- [Basic usage](#basicusage)
- [Write test](#writetest)
- [Set up](#setup)
- [Author](#author)
- [License](#license)

## Changelogs
- 05/07/2021: Add cypress-mochawesome-reporter for generating HTMl report
- 06/07/2021: Add cypress-multi-reporters for generating both Junit and Mocha reports
- 07/07/2021: Add cypress-Plugin-snapshot for comparing snapshots
- 09/07/2021: Add cypress-audit with Lighthouse and Pa11y for performance testing
- 11/07/2021: Add CircleCI with cypress docker images
- 12/07/2021: Add CircleCI with conditional workflows
- 13/07/2021: Add store_artifacts to store test result reports
- 15/07/2021: Add Github Workflows
- 17/07/2021: Add Gitlab CI
- 19/07/2021: Add Github Workflows to pull code from Github and sync to Bitbucket
- 20/07/2021: Add Github Workflows to pull code from Github and sync to Gitlab
- 24/07/2021: Update parallel run with Cypress Dashboard

## Features
- Testing across REST API and Web UI applications
- Multiple browser automation
- Multiple reports (JSON, html) with failed screenshots attached
- CI integrated (CircleCI, Github Actions, GitlabCI, Bitbucket Pipelines)
- Performance testing with Lighthouse and Pa11y
- Visual regression testing supported
- Page Object Model with Cucumber BDD
- Parallel runs with CI provider
- Parallel runs with Cypress Dashboard
- And other functions inherited from Cypress

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
npx cypress run --spec "cypress/integration/webtest/Login.feature,cypress/integration/webtest/PostSearch.feature"  --browser chrome
```

More details: https://docs.cypress.io/guides/guides/command-line


- Update snapshot
npx cypress run --env updateSnapshots=true --spec cypress/integration/webtest/Login.feature --browser chrome

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

