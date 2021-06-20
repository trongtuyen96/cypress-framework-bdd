import { Given, Then, When, And } from 'cypress-cucumber-preprocessor/steps';
import PostPage from '../pages/postPage.page';

const postpage = new PostPage();

Then('user sees the post with title contains {string}', (keyword) => {
    postpage.verifyPostlResultHeader(keyword);
});

And('user sees the post with author name is {string}', (authorname) => {
    postpage.verifyAuthor(authorname);
});