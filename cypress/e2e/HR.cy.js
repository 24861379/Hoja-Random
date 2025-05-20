describe('Grados - Hoja Random', () => {
  beforeEach(() => {
    cy.visit('Grados.html');
  });

  it('Debe mostrar el botón ¡Comenzar!', () => {
    cy.get('#btnInicio').should('be.visible').and('contain', '¡Comenzar!');
  });

  it('Debe mostrar una pregunta al hacer clic en ¡Comenzar!', () => {
    cy.get('#btnInicio').click();
    cy.get('#pregunta').should('not.contain', '¡Presiona el botón para iniciar!');
    cy.get('#pregunta').should('contain', '¿Cuál es el');
  });

  it('Debe mostrar opciones al hacer clic en ¡Comenzar!', () => {
    cy.get('#btnInicio').click();
    cy.get('#opciones button').should('have.length', 6);
  });

  it('Debe mostrar mensaje al elegir una opción', () => {
    cy.get('#btnInicio').click();
    cy.get('#opciones button').first().click();
    cy.get('#mensaje').should('be.visible');
  });

  it('Debe ocultar el mensaje después de 2 segundos', () => {
    cy.get('#btnInicio').click();
    cy.get('#opciones button').first().click();
    cy.get('#mensaje').should('be.visible');
    cy.wait(2100);
    cy.get('#mensaje').should('not.be.visible');
  });
});