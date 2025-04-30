describe('Ordenação da Tabela de Cursos', () => {
    beforeEach(() => {
        cy.visit('https://devclass-frontend-devops.azurewebsites.net/cursos.html');
    });

    it('Deve ordenar cursos em ordem alfabética', () => {
        cy.get('th').contains('Curso').click();
        cy.get('th').contains('Curso').click();
        cy.get('table tbody tr:first-child td:first-child')
          .should('contain', 'Administração');
    });
});