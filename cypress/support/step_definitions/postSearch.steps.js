import { Given, Then, When, And } from 'cypress-cucumber-preprocessor/steps';
import PostPage from '../pages/postPage.page';
import Homepage from '../pages/homePage.page';
import { fixCypressSpec } from '../index';

const homepage = new Homepage();
const postpage = new PostPage();

beforeEach(fixCypressSpec(__filename));

Then('it should display banner image correctly', () => {
    homepage.verifyBannerImage();
})

When('user click on Search button', () => {
    homepage.clickSearchBtn();
});

And('user enters {string} in search box', (keyword) => {
    homepage.enterKeywordSearch(keyword);
});

Then('user sees the post result with title contains {string}', (keyword) => {
    homepage.verifyFirstResultPostSearch(keyword);
});

And('user click on the title contains {string}', (keyword) => {
    homepage.clickOnTitlePost(keyword);
});

Then('user sees the post with title contains {string}', (keyword) => {
    postpage.verifyPostlResultHeader(keyword);
});

And('user sees the post with author name is {string}', (authorname) => {
    postpage.verifyAuthor(authorname);
});