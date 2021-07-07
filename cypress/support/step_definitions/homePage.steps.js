import { Given, Then, When, And } from 'cypress-cucumber-preprocessor/steps';
import Homepage from '../pages/homePage.page'

const homepage = new Homepage();

Then('it should display banner image correctly',()=>{
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