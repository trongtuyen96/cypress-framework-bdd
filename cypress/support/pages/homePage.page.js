class HomePage {
    getHomePageElements() {
        return require('../locators/homePage.locators')
    }

    launchWebsite() {
        cy.visit("https://www.automatedtestingwithtuyen.com");
    }

    clickLoginBtn() {
        cy.xpath(this.getHomePageElements().LOGIN_BTN).click();
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
        cy.xpath(this.getHomePageElements().SEARCH_BTN).click();
        return this;
    }

    enterKeywordSearch(keyword) {
        this.clickSearchBtn()
        cy.xpath(this.getHomePageElements().SEARCH_BOX)
            .clear()
            .type(keyword)
            .type('{enter}')
        return this;
    }

    clickOnTitlePost(keyword) {
        cy.xpath('//h2[contains(@class,"post-title blog-hover")]').click();
        return this;
    }

    verifyFirstResultPostSearch(keyword) {
        cy.xpath('//h2[contains(@class,"post-title blog-hover")]').invoke('text')
            .then((postTitle) => {
                expect(postTitle.trim()).to.include(keyword);
            })
        return this;
    }
}

module.exports = HomePage;