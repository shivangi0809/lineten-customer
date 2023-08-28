Feature: api test validation

    # Scenario1: Unsuccessful add
    Scenario: unsuccesful api post method using custom commands

        Given The endpoint url to create customer
        When An invalid request body '{"Email": "john@doe.com","Phone": "07499111222","Address": "191 Wood ln","City": "London","Zip": "W12 7FP","Country": "UK","Notes": "Hello"}' is sent to the API
        Then The response body should throw an error with 400 status code

    # Scenario2: Unsuccessful add
    Scenario: unsuccesful api post method using custom commands

        Given The endpoint url to create customer
        When An invalid request body '{"Phone": "07499111222","Address": "191 Wood ln","City": "London","Zip": "W12 7FP","Country": "UK","Notes": "Hello"}' is sent to the API
        Then The response body should throw an error with 400 status code

    # Scenario3a: Successful add Using fixture
    Scenario: api post method using fixure

        When I access POST api request to create customer
        Then I should receive customer details

    # Scenario3b: Successful add Using uuid
    Scenario: succesful api post method using custom commands

        Given The endpoint url to create customer
        When A valid request body '{ "Id": "1fa85f64-9017-4562-b3fc-2c963f66b789","Name": "john","Email": "john@doe.com","Phone": "07499111222","Address": "191 Wood ln","City": "London","State": "Kent","Zip": "W12 7FP","Country": "UK","Notes": "Hello"}' is sent to the API
        Then Api should return the response with 200 status code
        And The response body should contain request attributes


    # Scenario4: Successful get
    Scenario: api GET method

        When I access GET api request to get customer details
        Then I should be able to retrieve the customer details


    # Scenario5: Unsuccessful get by id
    Scenario: api GET method

        When I access GET api request by invalid customer id
        Then The response body should throw an error


    # Scenario6: Successful get by id
    Scenario: api GET method

        When I access GET api request by customer id
        Then I should be able to retrieve the customer details