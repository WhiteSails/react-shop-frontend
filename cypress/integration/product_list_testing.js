describe('Check if full product list loads', function () {
    it('successfully loads', function () {
        cy.visit('/');
        cy.get('#product_list li').should('have.length', 24)
    })
});