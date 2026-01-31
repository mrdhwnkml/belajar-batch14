describe('Login Test Suite', () => {
    it('should successfully log in with valid credentials', () => {
        cy.visit('https://example.com/login');
        cy.get('#username').type('validUser');
        cy.get('#password').type('validPassword');
        cy.get('#loginButton').click();
        cy.url().should('include', '/dashboard');
        cy.get('.welcome-message').should('contain', 'Welcome, validUser');
    });

    it('should display an error message with invalid credentials', () => {
        cy.visit('https://example.com/login');
        cy.get('#username').type('invalidUser');
        cy.get('#password').type('invalidPassword');
        cy.get('#loginButton').click();
        cy.get('.error-message').should('be.visible')
            .and('contain', 'Invalid username or password');
    });

}); 