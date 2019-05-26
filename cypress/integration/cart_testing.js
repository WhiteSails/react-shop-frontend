describe('Increment quantity of Milk, add Milk to cart, open cart, check if Milk is in cart and the quantity is 2', function() {
    it('successfully loads', function() {
        cy.visit('/');
        cy.get('li#7');
        cy.get('li#7 .increment')
            .click();
        cy.get('li#7 .add_button')
            .click();
        cy.get('button.toogle_cart')
            .click();
        cy.get('.product_cart').should('contain', 'Milk');
        cy.get('input').should('have.value', '2')
    })
});

describe('Add a mango to cart, open cart, check if 1 mango is in cart, remove mango from cart, close cart', function() {
    it('successfully loads', function() {
        cy.visit('/');
        cy.get('li#4');
        cy.get('li#4 .add_button')
            .click();
        cy.get('button.toogle_cart')
            .click();
        cy.get('.product_cart').should('contain', 'Mango');
        cy.get('input').should('have.value', '1');
        cy.get('button.remove')
            .click();
        cy.get('#products_in_cart tbody').should('be.empty');
        cy.get('button.close_btn')
            .click()
    })
});
