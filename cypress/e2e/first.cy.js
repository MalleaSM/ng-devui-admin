describe('Example Test', () => {
    it('Visits the home page', () => {
      cy.visit('/login');
      cy.contains('DevUI');
    });
  });
  