describe('Smoke Test', () => {
    it('Contains the prompt msg', () => {
        cy.visit('http://localhost:3000')
        .contains('password');
    })
});

