# cypress-framework
An automated testing framework based on CypressIO

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
