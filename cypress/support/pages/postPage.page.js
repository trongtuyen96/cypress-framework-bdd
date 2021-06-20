class PostPage {
    getPostPageElements() {
        return require('../locators/postPage.locators')
    }

    verifyPostlResultHeader(keyword) {
        cy.xpath(this.getPostPageElements().POST_PAGE_HEADER).invoke('text')
            .then((postheader) => {
                expect(postheader.trim()).to.include(keyword);
            });
        return this;
    }

    verifyAuthor(authorname) {
        cy.xpath(this.getPostPageElements().POST_AUTHOR).invoke('text')
            .then((postauthor) => {
                expect(postauthor.trim()).to.equal(authorname);
            });
        return this;
    }
}

module.exports = PostPage;