Feature: Rest API GET call

  Scenario Outline: Get user details by username

    Given I set Content-Type header to application/json value
    Then I make GET call to <url>
    Then Response code should be 200
    Then Response body should contain a key <jsonKey1> with a value <jsonValue1>
    Then Response body should contain a key <jsonKey2> with a value <jsonValue2>
    Then Response body should contain a key <jsonKey3> with a value <jsonValue3>

    Examples:
      | url                                                             | jsonKey1 | jsonValue1 | jsonKey2    | jsonValue2 | jsonKey3 | jsonValue3             |
      | https://atwt-api.herokuapp.com/v1/user/5e958257bcb48a0004d62da6 | name     | Tuyen      | phoneNumber | 0123456789 | email    | trongtuyen96@gmail.com |
      | https://atwt-api.herokuapp.com/v1/user/5e958a1ced1bd7000401aafa | name     | ATWT admin | phoneNumber | 0123456789 | email    | atwt@gmail.com         |