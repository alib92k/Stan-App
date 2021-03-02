// mySecondTest

// Launch wwww.stan.com.au

it('Should type into fields', () => {
    cy.visit('https://www.stan.com.au');

    cy.get('.site__login > .link')
    .click()

// Types email address
    cy.get('.form > :nth-child(1) > .form__input')
    .type("alisa@fetch.com.au")

// Types password
    cy.get(':nth-child(2) > .form__input')
    .type("Stan1234")

    
// Presses log in 
    cy.get(':nth-child(4) > .button')
    .click()
    
    cy.wait(5000);
/*
// Clicks recaptcha checkbox
    cy.get('iframe')
    .get('div.recaptcha-checkbox-checkmark')
    .click()
    //done?
*/
});
