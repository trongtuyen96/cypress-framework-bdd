import { Given, Then, When, And } from 'cypress-cucumber-preprocessor/steps';
import Homepage from '../pages/homePage.page'
import LoginPage from '../pages/loginPage.page';
import { fixCypressSpec } from '../index';

const loginpage = new LoginPage();
const homepage = new Homepage();

beforeEach(fixCypressSpec(__filename));

Given('user launches the ATWT website', () => {
    homepage.launchWebsite();
});

When('user click on Log In to login', () => {
    homepage.clickLoginBtn();
});

And('user click Log In link to swith to log in', () => {
    loginpage.clickLoginLink();
})

And('user click on Log In with Email', () => {
    loginpage.clickLoginWithEmailBtn();
});

Then('user navigates to Login page', () => {
    // loginpage.verifyLoginHeader();
});

And('user enters the Email', () => {
    loginpage.enterEmail();
});

And('user enters the Password', () => {
    loginpage.enterPassword();
});

And('user click on Log In button', () => {
    loginpage.clickLoginBtn();
});

Then('user login successfully', () => {
    homepage.verifyLoginUser();
});