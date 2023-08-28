import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const getUuid = require("uuid-by-string");

let requestBody, uuId;
Given("The endpoint url to create customer", () => {});

When("A valid request body {string} is sent to the API", (body) => {
  requestBody = JSON.parse(body);
  uuId = getUuid(requestBody.Id);
  requestBody.Id = uuId;
  cy.createCustomer(requestBody, "/add").as("postResponse");
});

When("An invalid request body {string} is sent to the API", (body) => {
  requestBody = JSON.parse(body);
  cy.createCustomer(requestBody, "/add").as("postResponse");
});

Then("Api should return the response with {int} status code", (statusCode) => {
  cy.get("@postResponse").then((response) => {
    expect(response.status).to.eq(statusCode);
  });
});

Then("The response body should contain request attributes", () => {
  cy.get("@postResponse").then((response) => {
    expect(response.body.Name).to.eq(requestBody.Name);
    expect(response.body.Email).to.eq(requestBody.Email);
  });
});

Then(
  "The response body should throw an error with {int} status code",
  (statusCode) => {
    cy.get("@postResponse").then((response) => {
      if (response.status >= 400) {
        expect(response.body.title).to.eq(
          "One or more validation errors occurred."
        );
      } else {
        expect(response.status).to.eq(statusCode);
      }
    });
  }
);

When("I access POST api request to create customer", () => {
  cy.fixture("Customer")
    .then((data) => {
      requestBody = data;
      cy.request({
        method: "POST",
        url: `${Cypress.config("baseUrl")}` + "/add",
        headers: { "Content-Type": "application/json-patch+json" },
        body: requestBody,
      });
    })
    .as("createCustomer");
});

When("I access GET api request by customer id", () => {
  cy.getCustomerById("c241a259-58b0-4936-b27d-6a393f0c95eb").as("getResponse");
});

When("I access GET api request by invalid customer id", () => {
  cy.getCustomerById("c241a259-58b0-4936-b27d-6a393f0c9009").as("getResponse");
});

When("I access GET api request to get customer details", () => {
  cy.getCustomerById("c241a259-58b0-4936-b27d-6a393f0c95eb").as("getResponse");
});

Then("I should receive customer details", () => {
  cy.get("@createCustomer").then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.Name).to.eq(requestBody.Name);
    expect(response.body.Email).to.eq(requestBody.Email);
  });
});

Then("I should be able to retrieve the customer details", () => {
  cy.get("@getResponse").then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.Name).to.eq("John Doe");
  });
});

Then("The response body should throw an error", () => {
  cy.get("@getResponse").then((response) => {
    expect(response.status).to.eq(404);
    expect(response.body.title).to.eq("Not Found");
  });
});
