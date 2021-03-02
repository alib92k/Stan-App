// myFirstTest
// Launch stan website

describe('Vist Stan website', () => {
    it('Visits Stan website', () => {
      cy.visit('https://www.stan.com.au/')

      cy.contains('type').click()

//Clicks 'Start your free trial button on top left hand corner
    cy.get('.site__cta > .button')
        .click()
        .wait(2000)
        cy.get('.wrapper > .button')
        .click()
        .wait(2000)

// Type email addresss
    cy.get('.-note-top > :nth-child(1) > :nth-child(2) > .form__input')
        .type("wendy@williams.com")

// Type password
    cy.get('.-note-top > :nth-child(2) > .form__input')
        .type("12345678")

// Type First name
    cy.get('.modal__body > :nth-child(1) > .form > :nth-child(2) > :nth-child(1) > .form__input')
        .type("Wendy")

// Type Last name
    cy.get(':nth-child(2) > :nth-child(2) > .form__input')
        .type("Williams")
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > input')
        .click()

// Enter birthday
    cy.get('[name="birthDay"]')
        .type("19")

// Enter birth month
    cy.get('[name="birthMonth"]')
        .type("10")

// Enter birth year
    cy.get('[name="birthYear"]')
        .type("1990")

        cy.get(':nth-child(3) > .form__input')
        .type("2000")

// Enter credit card details 
    cy.get("._1ocMzTO0WfdkBRj0DrAZMt > span > .js-iframe")
    .click()
    .type("12341234 5677 8900 0394 4444 5678")
   
    cy.get("._1Q9RNER6mQz7m41crgXrcM")
    
    .get(":nth-child(4) > span > .js-iframe")
    .type("999")

    cy.get(".symbol")
    .click()

// Click trending TV Shows on Stan

    cy.get(':nth-child(1) > .wrapper > .cta--ribbon__link > .link')
    .click()

})

});

