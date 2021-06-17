import {Given, Then, When, And} from 'cypress-cucumber-preprocessor/steps';
import HotelSearchResult from '../pages/hotelsSearchResultsPage.page'

const hotelsearchresults = new HotelSearchResult();

Then('user navigates to hotel result page',()=> {
    hotelsearchresults.verifyHotelResultHeader();
});

Then('user sees the hotel {string} in {string} city', (hotelname, city)=> {
    hotelsearchresults.checkHotelNameResult(hotelname, city);
});