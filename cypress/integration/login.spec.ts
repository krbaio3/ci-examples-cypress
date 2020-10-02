describe('Login specs', () => {

  it('visit the login page', () => {
    cy.visit('/');
  });

  it('should name input has the focus WHEN it clicks on it', () => {
    // Arrange
    // Act
    cy.visit('/');
    cy.findByRole('textbox').click();
    // cy.get('input[name="name"]').click();

    // Assert
    // cy.get('input[name="name"]').should('have.focus');
    cy.findByRole('textbox').should('have.focus');
  });

  it('should show an alert with a message WHEN type invalid credentials', () => {
    // Arrange
    const user = 'admin';
    const pass = 'pass';

    cy.on('window:alert', cy.stub().as('alertStub'));

    // Act
    cy.visit('/');
    cy.findByLabelText('Name').as('userInput');
    cy.findByLabelText('Password').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(pass);
    cy.findByRole('button', { name: 'Login' }).click();

    // Assert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', pass);
    cy.get('@alertStub').should('have.been.called')
  });
  it('should navigate to hotels url WHEN type valid credentials', () => {
    // Arrange
    const user = 'admin';
    const pass = 'test';

    // Act
    cy.visit('/');
    cy.findByLabelText('Name').as('userInput');
    cy.findByLabelText('Password').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(pass);
    cy.findByRole('button', { name: 'Login' }).click();

    // Assert
    cy.url().should('equal', 'http://localhost:8080/#/hotel-collection');
  });
});
