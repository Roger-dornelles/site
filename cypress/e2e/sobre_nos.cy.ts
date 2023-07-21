/// <reference types="cypress" />

describe('navigating to the about us page', () => {
  it('expected to navigate to the about page and find elements', () => {
    cy.visit('/');
    cy.get('body [data-cy="mobile-icon"]').click();
    cy.get('.flex-col > :nth-child(2) > .cursor-pointer').click();
    cy.url().should('contain', '/Sobre');
    cy.get('section [data-cy="sobre"]').should('exist');
    cy.get('section [data-cy="sobre"]').should('contain', 'há 15 anos');
  });

  it('expected to navigate to the about page and find elements', () => {
    cy.visit('/');
    cy.get('body [data-cy="mobile-icon"]').click();
    cy.get('.flex-col > :nth-child(2) > .cursor-pointer').click();
    cy.get('section [data-cy="sobre"]').should('exist');
    cy.get('section [data-cy="sobre"]').should('contain', 'Team');
    cy.get('section [data-cy="manifesto"]').should('exist');
    cy.get('section [data-cy="manifesto"]').should('contain', 'compromisso');
    cy.get('section [data-cy="socials"]').should('exist');
  });

  it('expected to navigate to the about page and find footer elements', () => {
    cy.visit('/');
    cy.get('body [data-cy="mobile-icon"]').click();
    cy.get('.flex-col > :nth-child(2) > .cursor-pointer').click();
    cy.get('section [data-cy="footer"]').should('exist');
    cy.get('section [data-cy="footer_maisCanais"]').should('exist');
    cy.get('section [data-cy="footer_maisCanais"]').should('contain', 'Portal do cliente');
    cy.get('section [data-cy="footer_bottom"]').should('exist');
    cy.get('section [data-cy="footer_bottom"]').should('contain', '2023');
  });
});
