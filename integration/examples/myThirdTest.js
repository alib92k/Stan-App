// myThirdTest

// Login in via stan.com.au/watch

it('Should load stan.com.au/watch', () => {
    cy.visit('https://www.stan.com.au/watch/')
    cy.get('._3w4cHrs8Gm5YQ6yer4v1WM')
    .click()

    // Enter email address in login field
    cy.get(':nth-child(1) > .form__input')
    .type("alisa@fetch.com.au")

    // Press forgot password button
    cy.get(':nth-child(2) > .form__input')
      .get('.-margin > .link')
    .click()
    
    // Enter email address 
    cy.get('.form__input')
    .type('alisa@fetchtv.com.au')

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
    .type("alisa@fetch.com.au")

    // Check password length
    cy.get(':nth-child(2) > .form__input')
    .type("1234")
    .get('.button')
    .click()

    // Clear text and re-type correct password
    cy.get(':nth-child(2) > .form__input')
    .clear()
    .type("Stan1234")
    .get('.button')
    .click()

});