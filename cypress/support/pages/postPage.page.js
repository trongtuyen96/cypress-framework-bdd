class PostPage {
    getPostPageElements() {
        return require('../locators/postPage.locators')
    }

    verifyPostlResultHeader(keyword) {
        cy.xpath(this.getPostPageElements().POST_PAGE_HEADER, { timeout: 10000 }).invoke('text')
            .then((postheader) => {
                expect(postheader.trim().toLowerCase()).to.include(keyword.toLowerCase());
            });
        return this;
    }

    verifyAuthor(authorname) {
        cy.xpath(this.getPostPageElements().POST_AUTHOR, { timeout: 10000 }).invoke('text')
            .then((postauthor) => {
                expect(postauthor.trim().toLowerCase()).to.equal(authorname.toLowerCase());
            });
        return this;
    }
}

module.exports = PostPage;