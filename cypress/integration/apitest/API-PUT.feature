Feature: Rest API GET call

    Scenario: Update User

        Given I set Content-Type header to application/json value
        When I make GET call to 
        Then Response code should be 200
        When I set request body to {}
        Then I make PUT call to 
        Then Response code should be 200
        When I make GET call to 
        And Response body should contain a key  with a value 