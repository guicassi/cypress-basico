//const { first } = require("lodash");

describe("Tickets", function(){

    beforeEach(function() {
        cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html");
    });

    it("Has 'TICKETBOX' at header", function(){
        cy.get('#app header h1').should('have.text', 'TICKETBOX');
    })

    it.only("Fills all the text input fields", function(){
        const firstName = "Samuel";
        const lastName = "Andrade";

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("samuel.andrade@live.com");
        cy.get("#requests").type("QA Analyst")
        cy.get("#signature").type(`${firstName} ${lastName}`);
    })
})