class HomePage {
    getHomePageElements() {
        return require('../locators/homePage.locators')
    }

    launchWebsite() {
        cy.visit("/");

        // cy.get('.some-element-in-your-app-that-only-exists-once-page-has-loaded', { timeout: 30000 })

        // Special case: Wait for page fully loaded and rendered
        cy.wait(10000);
        return this;
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
        cy.xpath(this.getHomePageElements().SEARCH_BOX)
            .type(keyword)
            .type('{enter}')
        return this;
    }

    clickOnTitlePost(keyword) {
        cy.xpath(this.getHomePageElements().POST_TITLE_SEARCH, { timeout: 10000 }).click();
        return this;
    }

    verifyFirstResultPostSearch(keyword) {
        cy.xpath(this.getHomePageElements().POST_TITLE_LINK, { timeout: 10000 }).invoke('text')
            .then((postTitle) => {
                expect(postTitle.trim().toLowerCase()).to.include(keyword.trim().toLowerCase());
            })
        return this;
    }

    verifyBannerImage() {
        cy.xpath(this.getHomePageElements().BANNER_BG).toMatchSnapshot();
        return this;
    }

    verifyLoginUser() {
        cy.xpath(this.getHomePageElements().USER_NAME, { timeout: 10000 }).invoke('text')
            .then((username) => {
                cy.fixture('testdata.json').then((td) => {
                    expect(username.trim()).to.equal(td.firstname + td.lastname);
                })
            })
        return this;
    }
}

module.exports = HomePage;