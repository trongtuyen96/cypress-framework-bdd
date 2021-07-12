Feature: Automatedtestingwithtuyen.com login feature

    Scenario: Verify if user is able to login

        Given user launches the ATWT website
        Then it should display banner image correctly
        When user click on Log In to login
        And user click Log In link to swith to log in
        And user click on Log In with Email
        And user navigates to Login page
        And user enters the Email
        And user enters the Password
        And user click on Log In button
        Then user login successfully
        # And it should run performance audits using Pa11y