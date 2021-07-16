Feature: Rest API POST call

    Scenario: Create Car

        Given I set Content-Type header to application/json value
        And I set request body to {"type": "Super Bike","speed": 330,"model": "BMW M1000RR","color": "White Blue","userID": "5e958257bcb48a0004d62da6"}
        Then I make POST call to https://atwt-api.herokuapp.com/v1/car
        Then Response code should be 200
        Then Response body should contain a key model with a value BMW M1000RR
        Then I delete above created object from https://atwt-api.herokuapp.com/v1/car
        Then Response code should be 200