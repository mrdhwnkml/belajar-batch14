describe('register Test Suite', () => {
    it.only('should successfully register with valid credentials devs', () => {
        cy.visit('https://example.com/register');
        cy.get('#username').type('newUser');
        cy.get('#email').type('newUser@example.com');
        cy.get('#password').type('newPassword');
        cy.get('#registerButton').click();
        cy.url().should('include', '/welcome');
        cy.get('.welcome-message').should('contain', 'Welcome, newUser');
    });

    it.only('should display an error message with already taken username', () => {
        cy.visit('https://example.com/register');
        cy.get('#username').type('existingUser');
        cy.get('#email').type('existingUser@example.com');
        cy.get('#password').type('somePassword');
        cy.get('#registerButton').click();
        cy.get('.error-message').should('be.visible')
            .and('contain', 'Username already taken');
    })
});

