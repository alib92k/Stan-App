// myThirdTest

// Login in via stan.com.au/watch

it('Should load stan.com.au/watch', () => {
    cy.visit('https://www.stan.com.au/watch/')
    cy.get('._3w4cHrs8Gm5YQ6yer4v1WM')
    .click()

    // Enter email address in login field
    cy.get(':nth-child(1) > .form__input')
    .type("thomas.jackson95@outlook.com")

    // Press forgot password button and emails user password reset link
    cy.get(':nth-child(2) > .form__input')
      .get('.-margin > .link')
    .click()
    
    // Enter email address 
    cy.get('.form__input')
    .type('thomas.jackson95@outlook.com')

    // Click reset password button, stan will email you reset link
    cy.get('.button')
    .click()

    // Close reset password popup
    cy.get('.symbol')
    .click()

    // Press login button on top right hand corner
    cy.get('._3w4cHrs8Gm5YQ6yer4v1WM')
    .click()

    // Enter email address in login
    cy.get(':nth-child(1) > .form__input')
    .type("thomas.jackson95@outlook.com")

    // Check password length, if less than 6 should throw an error
    cy.get(':nth-child(2) > .form__input')
    .type("P1234")
    .get('.button')
    .click()

    // Clear text and re-type correct password
    cy.get(':nth-child(2) > .form__input')
    .clear()
    .type("Password")
    .get('.button')
    .click()

});
