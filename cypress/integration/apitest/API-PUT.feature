Feature: Rest API PUT call

    Scenario: Update User

        Given I set Content-Type header to application/json value
        When I make GET call to https://atwt-api.herokuapp.com/v1/car
        Then Response code should be 200
        When I set request body to {"color": "Blue White Red With Fire"}
        Then I make PUT call to https://atwt-api.herokuapp.com/v1/car/60d2174620ead60004917241
        Then Response code should be 201
        When I make GET call to https://atwt-api.herokuapp.com/v1/car/60d2174620ead60004917241
        And Response body should contain a key color with a value Blue White Red With Fire