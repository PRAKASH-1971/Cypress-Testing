/// <reference types="Cypress" />

describe("Checking Counter",()=>{

    beforeEach(()=>{
        cy.visit("http://localhost:3000");
    })
    it('intercept GET request',()=>{
        cy.intercept("GET","http://localhost:8080/counter",{
            value:10,
        }).as('getReq')
        cy.wait('@getReq').should((data)=>{
})    })

    it("intercept POST request",()=>{
        cy.intercept("GET", "http://localhost:8080/counter",{
            fixture:"counter.json",
        }).as("getReq");
     
        cy.intercept("POST","http://localhost:8080/counter",{
            value:100
        }).as('postReq')
        cy.wait('@getReq')
        cy.get('.increment_count').click();
        cy.wait('@postReq').then((r)=>{
            console.log("XLRI data",r);
        })    })
});

