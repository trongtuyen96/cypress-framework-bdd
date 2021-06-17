import {Given, Then, When, And} from 'cypress-cucumber-preprocessor/steps';
import Login from "../pages/loginPage.page"

const loginpage =  new Login();

Given('user launches the PHPTravels website', ()=> {
    loginpage.launchWebsite();
});

Then('user click on MY ACCOUNT to login', ()=> {
    loginpage.clickMyAccount();
});

When('user click on Login', ()=> {
    loginpage.clickLoginLink();
});

Then('user navigates to Login page', ()=> {
    loginpage.verifyLoginHeader();
});

And('user enters the Email address',()=> {
    loginpage.enterEmail();
});

And('user enters the Password',()=> {
    loginpage.enterPassword();
});

Then('user click on Login button', ()=> {
    loginpage.clickLoginButton()
});