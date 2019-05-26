describe('Send message to support', function() {
    it('successfully loads', function() {
        cy.visit('/');
        cy.get(".toogle_chat")
            .click();
        cy.get("input.form-control")
            .type('Hi there, I have a problem');
        cy.get('button.send')
            .click();
        cy.get('.chat_box').contains('Wait');
    })
});
