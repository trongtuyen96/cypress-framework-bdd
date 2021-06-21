class HomePage {
    getHomePageElements() {
        return require('../locators/homePage.locators')
    }

    launchWebsite() {
        cy.visit("https://www.automatedtestingwithtuyen.com");
    }

    clickLoginBtn() {
        cy.xpath(this.getHomePageElements().LOGIN_BTN).wait(5000).click();
        return this;
    }

    clickHomeBtn() {
        cy.xpath(this.getHomePageElements().HOME_BTN).click();
        return this;
    }

    clickForumBtn() {
        cy.xpath(this.getHomePageElements().FORUM_BTN).click();
        return this;
    }

    clickAuthorBtn() {
        cy.xpath(this.getHomePageElements().AUTHOR_BTN).click();
        return this;
    }

    clickUserBtn() {
        cy.xpath(this.getHomePageElements().USER_BTN).click();
        return this;
    }

    clickCateAllBtn() {
        cy.xpath(this.getHomePageElements().CATE_ALL_BTN).click();
        return this;
    }

    clickCatePatternsBtn() {
        cy.xpath(this.getHomePageElements().CATE_PATTERNS_BTN).click();
        return this;
    }

    clickCatePatternsBtn() {
        cy.xpath(this.getHomePageElements().CATE_PATTERNS_BTN).click();
        return this;
    }

    clickCateToolsBtn() {
        cy.xpath(this.getHomePageElements().CATE_TOOLS_BTN).click();
        return this;
    }

    clickCateFrameworksBtn() {
        cy.xpath(this.getHomePageElements().CATE_FRAMEWORKS_BTN).click();
        return this;
    }

    clickSearchBtn() {
        cy.xpath(this.getHomePageElements().SEARCH_BTN).wait(2000).click();
        return this;
    }

    enterKeywordSearch(keyword) {
        cy.xpath(this.getHomePageElements().SEARCH_BOX)
            .wait(2000)
            .type(keyword)
            .type('{enter}')
        return this;
    }

    clickOnTitlePost(keyword) {
        cy.xpath(this.getHomePageElements().POST_TITLE_SEARCH).click();
        return this;
    }

    verifyFirstResultPostSearch(keyword) {
        cy.xpath(this.getHomePageElements().POST_TITLE_LINK).invoke('text')
            .then((postTitle) => {
                expect(postTitle.trim().toLowerCase()).to.include(keyword.trim().toLowerCase());
            })
        return this;
    }
}

module.exports = HomePage;