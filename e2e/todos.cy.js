/// <reference types="Cypress" />

describe("Checking Todos", () => {
  beforeEach(() => {
    cy.visit("http://example.cypress.io/todo");
  });
  it("have the basic structure", () => {
    cy.get(".new-todo").should("exist");
    cy.get(".todo-count").should("exist");
    cy.get(".filters").should("exist");
  });

  it("able to addtask", () => {
    cy.get(".todo-list").children().should("have.length", 2);
    cy.get(".new-todo").type("Learn React{enter}");
    cy.get(".new-todo").type("Learn Redux{enter}");
    cy.get(".new-todo").type("Learn Cypress{enter}");
    cy.get(".todo-list").children().should("have.length", 5);
  });
  it("should increase task length in footer", () => {
    cy.get(".todo-count strong").should("have.text", 2);
    cy.get(".new-todo").type("Learn React{enter}");
    cy.get(".todo-count strong").should("have.text", 3);
  });
});
