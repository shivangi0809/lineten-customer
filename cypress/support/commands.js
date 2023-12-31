// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('createCustomer', (requestBody, addCustomer) => {
    cy.request({
      method: 'POST',
      url: `${Cypress.config('baseUrl')}`+`${addCustomer}`,
      failOnStatusCode: false,
      body: requestBody,
      headers: { 'Content-Type': 'application/json-patch+json' },
      
    });
  });


  Cypress.Commands.add('getCustomerById', (id) => {
    cy.request({
      method: 'GET',
      url: `${Cypress.config('baseUrl')}`+`/get/${id}`,
      failOnStatusCode: false
    });
  });

  Cypress.Commands.add('getCustomer', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.config('baseUrl')}`+`/get`,
      failOnStatusCode: false
    });
  });