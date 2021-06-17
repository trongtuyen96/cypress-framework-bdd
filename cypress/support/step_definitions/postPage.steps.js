import {Given, Then, When, And} from 'cypress-cucumber-preprocessor/steps';
import postpage from '../pages/postPage.page'

const postpage = new Post();

Then('user navigates to hotel result page',()=> {
    postpage.verifyHotelResultHeader();
});

Then('user sees the hotel {string} in {string} city', (hotelname, city)=> {
    postpage.checkHotelNameResult(hotelname, city);
});