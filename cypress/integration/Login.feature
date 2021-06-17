Feature: Automatedtestingwithtuyen.com login feature

    Scenario: Verify if user is able to login

        Given user launches the ATWT website
        When user click on Log In to login
        And user click on Log In with Email
        And user navigates to Login page
        And user enters the Email
        And user enters the Password
        And user click on Log In button
        Then user login successfully