import {Given, Then, When, And} from 'cypress-cucumber-preprocessor/steps';

var headers = {};
var cookies = [];
var requestBody = '';
var method = '';
var url = '';
var requestOptions = {};
var responseObject;
var responseBody;

Given(/^I set (.*) header to (.*) value$/,(headerName, headerValue)=>{
    let valuesArray = [];
    if (headers[headerName]) {
        valuesArray = headers[headerName].split(',');
    }
    valuesArray.push(headerValue);
    headers[headerName] = valuesArray.join(',');
});

And(/^I set cookie to (.*)$/, (cookie)=>{
    cookies.push(cookie);
});

And(/^I set request body to (.*)$/, (body)=>{
    requestBody = body;
    console.log(requestBody);
});

When(/^I make (.*) call to (.*)$/,(reqmethod, apiuri)=>{
    method = reqmethod;
    url = apiuri;

    requestOptions.log = true;
    requestOptions.method = method;
    requestOptions.url = url;
    requestOptions.headers = headers;
    requestOptions.body = requestBody;

    cy.wait(3000)
        .request(requestOptions)
        .wait(2000)
        .then((resp)=>{
        responseObject = resp;
        console.log(responseObject);
        responseBody = JSON.stringify(responseObject.body);
        responseBody = JSON.parse(responseBody);
    });
});

Then(/^I delete above created object from (.*)$/,(apiuri)=>{
    url = apiuri;
    let jsonKey = '_id'

    requestOptions.log = true;
    requestOptions.method = 'DELETE';
    requestOptions.url = url + '/'+ responseBody[jsonKey];
    requestOptions.headers = headers;
    requestOptions.body = requestBody;

    cy.wait(3000)
        .request(requestOptions)
        .wait(2000)
        .then((resp)=>{
        responseObject = resp;
        console.log(responseObject);
        responseBody = JSON.stringify(responseObject.body);
        responseBody = JSON.parse(responseBody);
    });
});

Then(/^Response code should be (.*)$/, (responseCode)=>{
    expect(responseCode).to.equal(responseObject.status.toString());
});

Then(/^Response header (.*) should be (.*)$/, (header, headerValue)=>{
    const realHeaderValue = responseObject.headers[header.toLowerCase()];
    const regex = new RegExp(headerValue);
    expect(regex.test(realHeaderValue)).to.equal(true);
});

Then(/^Response header (.*) should not be (.*)$/, (header, headerValue)=>{
    const realHeaderValue = responseObject.headers[header.toLowerCase()];
    const regex = new RegExp(headerValue);
    expect(regex.test(realHeaderValue)).to.equal(false);
});

Then(/^Response body should contain a key (.*) with a value (.*)$/, (jsonkey, value)=>{
    let jsonKey;
    console.log(jsonkey, value);
    let regex = new RegExp(value);
    let success;
    if(jsonkey.includes(".")){
        jsonKey = jsonkey.split(".");
        if(jsonKey.length === 2){
            success = regex.test(responseBody[jsonKey[0]][jsonKey[1]]);
            expect(success).to.equal(true);
        }
        else if(jsonKey.length === 3){
            success = regex.test(responseBody[jsonKey[0]][jsonKey[1]][jsonKey[2]]);
            expect(success).to.equal(true);
        }
        else if(jsonKey.length === 4){
            success = regex.test(responseBody[jsonKey[0]][jsonKey[1]][jsonKey[2]][jsonKey[3]]);
            expect(success).to.equal(true);
        }
    }
    else {
        jsonKey = jsonkey;
        success = regex.test(responseBody[jsonKey]);
        expect(success).to.equal(true);
    }
});

Then(/^Response body should not contain contain a key (.*) with a value (.*)$/, (jsonkey, value)=>{
    let jsonKey;
    const regex = new RegExp(value);
    let success;
    if(jsonkey.includes(".")){
        jsonKey = jsonkey.split(".");
        if(jsonKey.length === 2){
            success = regex.test(responseBody[jsonKey[0]][jsonKey[1]]);
            expect(success).to.equal(false);
        }
        else if(jsonKey.length === 3){
            success = regex.test(responseBody[jsonKey[0]][jsonKey[1]][jsonKey[2]]);
            expect(success).to.equal(false);
        }
        else if(jsonKey.length === 4){
            success = regex.test(responseBody[jsonKey[0]][jsonKey[1]][jsonKey[2]][jsonKey[3]]);
            expect(success).to.equal(false);
        }
    }
    else {
        jsonKey = jsonkey;
        success = regex.test(responseBody[jsonKey]);
        expect(success).to.equal(false);
    }
});