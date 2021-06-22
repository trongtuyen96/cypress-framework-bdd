Feature: Automatedtestingwithtuyen.com post search feature

  Scenario Outline: User is able to search for post

    Given user launches the ATWT website
    When user click on Search button
    And user enters "<search>" in search box
    Then user sees the post result with title contains "<search>"
    And user click on the title contains "<search>"
    Then user sees the post with title contains "<search>"
    And user sees the post with author name is "<author>"

    Examples:
      | search                | author       |
      | The First 5           | Tuyen Nguyen |
      | Interface vs Abstract | Tuyen Nguyen |