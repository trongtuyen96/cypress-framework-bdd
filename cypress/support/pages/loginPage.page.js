class LoginPage {
    getLoginPageElements() {
        return require('../locators/loginPage.locators');
    }

    clickLoginLink() {
        cy.xpath(this.getLoginPageElements().LOGIN_LINK).click();
        return this;
    }

    clickLoginWithEmailBtn() {
        cy.xpath(this.getLoginPageElements().LOGIN_EMAIL_BTN).click();
        return this;
    }

    enterEmail() {
        cy.fixture('testdata.json').then((td) => {
            cy.xpath(this.getLoginPageElements().EMAIL_INPUT)
                .click()
                .clear()
                .type(td.validemail);
        });
        return this;
    }

    enterPassword() {
        cy.fixture('testdata.json').then((td) => {
            cy.xpath(this.getLoginPageElements().PASSWORD_INPUT)
                .click()
                .clear()
                .type(td.validpassword);
        });
        return this;
    }

    clickLoginBtn() {
        cy.xpath(this.getLoginPageElements().LOGIN_BTN).click();
        return this;
    }
}

module.exports = LoginPage;