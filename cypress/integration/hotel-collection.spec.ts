describe('HotelCollection specs', () => {
  it('should fetch hotel list and show it in screen WHEN visit /hotel-collection url', () => {
    // Arrange
    cy.server();
    cy.route('GET', '/api/hotels').as('fetchHotels');
    // Act
    cy.visit('/hotel-collection');

    // Assert
    cy.wait('@fetchHotels');
    cy.findAllByRole(`listitem`).should('have.length', 10);
  });
  it('should fetch hotel list and show it in screen WHEN visit /hotel-collection url CUSTOM COMMAND', () => {
    // Arrange
    // Act
    cy.loadAndVisit('/api/hotels', '/hotel-collection');
    // Assert
    cy.findAllByRole(`listitem`).should('have.length', 10);
  });
  it('should fetch hotel list and show it in screen WHEN visit /hotel-collection url', () => {
    // Arrange
    cy.server();
    cy.route('GET', '/api/hotels').as('fetchHotels');

    // Act
    cy.visit('/hotel-collection');

    // Assert
    cy.wait('@fetchHotels');
    cy.findAllByRole(`listitem`).should('have.length.greaterThan', 0);
  });
  it('should fetch two hotels WHEN visit /hotel-collection url', () => {
    // Arrange
    cy.server();

    // Dos opciones:
    // 1. cy.fixture('hotels').then((hotels) =>{cy.route('GET', '/api/hotels', hotels);});
    // 2. cy.route('GET', '/api/hotels', 'fixture:hotels');

    cy.route('GET', '/api/hotels', 'fixture:hotels').as('fetchHotels');

    // Act
    cy.visit('/hotel-collection');

    // Assert
    cy.wait('@fetchHotels');
    cy.findAllByRole(`listitem`).should('have.length', 2);
  });
  it('should fetch two hotels WHEN visit /hotel-collection url with CUSTOM COMMAND', () => {
    // Arrange
    // Act
    cy.loadAndVisit('/api/hotels', '/hotel-collection', 'fixture:hotels');
    // Assert
    cy.findAllByRole(`listitem`).should('have.length', 2);
  });
});
