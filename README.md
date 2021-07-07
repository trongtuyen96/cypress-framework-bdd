# cypress-framework-bdd
An automated testing framework based on CypressIO with Behaviour-Driven Development

## Changelogs
- 05/07/2021: Add cypress-mochawesome-reporter for generating HTMl report
- 06/07/2021: Add cypress-multi-reporters for generating both Junit and Mocha reports

## Installation

Use npm to install the dependencies

```bash
npm install
```

## Command

#### Open cypress
```bash
npx cypress open
```
or

```bash
npm run cypress:open
```

#### Run all features
```bash
npx cypress run 
```

#### Run all features on specific browser
```bash
npx cypress run --browser browser
```

#### Run a specific feature file
```bash
npx cypress run --spec cypress/integration/{featurefile.feature}
```

```bash
npx cypress run --spec api-GET.feature --browser chrome --no-exit
```
#### Docker
###### Docker build image
```bash
docker build . -t atwt-api
```
###### Docker list images
```bash
docker images
```
###### Docker run
```bash
docker run -d -p 3000:3000 --name atwtapi atwt-api

-d for background mode (not attached to current session)
-p for specfiying in and out ports
--name for specifying container name
```

###### Docker list containers
```bash
docker container ls
```
###### Docker stop container
```bash
docker stop atwtapi
```
###### Docker remove container
```bash
docker rm atwtapi
```
###### Docker remove images
```bash
docker rmi atwt-api
```

cy.wait is recommended to be removed as cy.get already have its own wait.

Please head to document for info:

npx cypress run --spec "cypress/integration/webtest/Login.feature,cypress/integration/webtest/PostSearch.feature"  --browser chrome
