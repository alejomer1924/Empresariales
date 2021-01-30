describe('Cypress MercadoLibre Test', () => {
    it('First cypress Test on a webpage', ()=> {
        cy.visit('http://localhost:8080/'); 
        cy.get('.v-input__slot').type('ipad');
        cy.get('.v-btn__content').click();
    })
}); 
