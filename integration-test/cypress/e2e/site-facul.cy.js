describe('Página Inicial', () => {
  it('Deve carregar corretamente a página', () => {
    cy.visit('https://devclass-frontend-devops.azurewebsites.net/cursos.html')
    cy.contains('Faculdade Tech')
  });

  it('Deve navegar até a página de Cursos', () => {
    cy.visit('https://devclass-frontend-devops.azurewebsites.net/cursos.html')
    cy.get('nav a').contains('Cursos').click();
    cy.url().should('include', 'cursos.html');
  });
})
