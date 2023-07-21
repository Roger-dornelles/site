/// <reference types="cypress" />

describe('navigating to the developments page', () => {
  it('expected navigate to page ventures', () => {
    cy.visit('/');
    cy.get('body [data-cy="mobile-icon"]').click();
    cy.get('.flex-col > :nth-child(1) > .cursor-pointer').click();
    cy.url().should('contain', '/Empreendimentos');
  });

  it('expected to find elements on the page', () => {
    cy.visit('/');
    cy.get('body [data-cy="mobile-icon"]').click();
    cy.get('.flex-col > :nth-child(1) > .cursor-pointer').click();
    cy.url().should('contain', '/Empreendimentos');
    cy.get('section [data-cy="section"]').should('exist');
    cy.get('section [data-cy="section"]').should('contain', 'Lançamento');
    cy.get('section [data-cy="ebook"]').should('contain', 'obras entregues');
  });

  it('expected to find elements on the page', () => {
    cy.visit('/');
    cy.get('body [data-cy="mobile-icon"]').click();
    cy.get('.flex-col > :nth-child(1) > .cursor-pointer').click();
    cy.url().should('contain', '/Empreendimentos');
    cy.get('section [data-cy="ebook"]').should('exist');
    cy.get('section [data-cy="ebook"] button').should('exist');
    cy.get('section [data-cy="ebook"] button').click();
  });
});
