describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if user can change slides back and forth via the nav buttons', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-button-prev').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});

describe('Swiper Gallery Test', function () {
  it('Check if every slide has the correct content', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Rome')
    cy.get('.swiper-slide-active').should('contain', 'Italy')
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London')
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom')
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris')
    cy.get('.swiper-slide-active').should('contain', 'France')
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
  });
});

describe('Swiper Gallery Test', () => {
  const viewports = [
    { device: 'Desktop', width: 1280, height: 800 },
    { device: 'Tablet', width: 768, height: 1024 },
    { device: 'Mobile', width: 375, height: 667 },
  ];

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  viewports.forEach(({ device, width, height }) => {
    it(`Gallery works correctly on: ${device}`, () => {
      cy.viewport(width, height);
      cy.get('.swiper').should('be.visible');
      cy.get('.swiper-button-next').should('be.visible').click();
      cy.wait(2000);
      cy.get('.swiper-button-prev').should('be.visible').click();
    });
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if gallery is being displayed correctly', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper').should('be.visible');
    cy.get('.swiper-button-prev').should('be.visible').click();
    cy.get('.swiper-button-next').should('be.visible').click();
    cy.get('.swiper-slide').should('have.length', 3)
  });
});