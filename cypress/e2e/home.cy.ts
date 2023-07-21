/// <reference types="cypress" />

describe('testing initial HOME', () => {
  it('navegation home', () => {
    cy.visit('/');
    cy.get('body [data-cy="mobile-icon"]').click();
    cy.get('body [data-cy="mobile-icon-close"]').click();
  });

  it('navegation pages', () => {
    cy.visit('/');
    cy.get('body [data-cy="mobile-icon"]').click();
    cy.get('.flex-col > :nth-child(1) > .cursor-pointer').click();
    cy.url().should('contain', '/Empreendimentos');
    cy.get('body [data-cy="logo"]').click();
    cy.url().should('contain', '/');
  });

  it('expect to find elements in footer', () => {
    cy.visit('/');
    cy.get('section [data-cy="footer"]').should('exist');
    cy.get('section [data-cy="button"]').should('exist');
    cy.get('section [data-cy="footer"]').should('contain', 'C');
    cy.get('section [data-cy="footer"]').should('contain', 'Desenvolvido');
  });
});
