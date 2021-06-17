Feature: Automatedtestingwithtuyen.com post search feature

    Scenario Outline: User is able to search for hotel in London destination

      Given user launches the ATWT website
      When user click on Search button
      And user enters "<The First 5>" in search box
      And user hit Enter for search
      And user click on the title contains "<The First 5>"
      Then user sees the post with title contains "<The First 5>"
      And user sees the post with author name is "<The First 5>"

      Examples:
      |search     | author       |  
      |The First 5|Tuyen Nguyen|
      |Interface vs Abstract|Tuyen Nguyen|