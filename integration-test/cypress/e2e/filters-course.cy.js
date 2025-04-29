describe('Filtrando Cursos', () => {
    beforeEach(() => {
        cy.visit('https://domeneghetti-devops-ci.azurewebsites.net/cursos.html');
    });

    it('Deve filtrar curso por nome', () => {
        cy.get('input[type=search]').type('Ciências da Computação');
        cy.get('table tbody tr').should('have.length', 1);
    });

    it('Deve filtrar cursos por período', () => {
        cy.get('input[type=search]').type('10 semestres');
        cy.get('table tbody tr').should('have.length', 4);
    });
});