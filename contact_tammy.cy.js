describe('contact Tammy', () => {
  before(() => {
    cy.visit("https://www.baldwin.senate.gov/contact/contact-tammy")
  })

  it('contact', () => {
    cy.get('input#yourname').type('first name')
    cy.get('input#zip-input').type('zip')
    cy.get('button#zip-submit').click()
    cy.get(':nth-child(1) > .row > :nth-child(2) > .control-group').children('div').children('input').type("last name")
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .control-group').children('div').children('input').type('street address')
    cy.get(':nth-child(2) > :nth-child(3) > .col-md-6 > .control-group').children('div').children('input').type("city")
    cy.get(':nth-child(4) > :nth-child(1) > .control-group').children('div').children('input').type("phone number")
    cy.get(':nth-child(5) > :nth-child(1) > .control-group').children('div').children('input').type("email")
    cy.get(':nth-child(5) > :nth-child(2) > .control-group').children('div').children('input').type("email")
    cy.get('.show-form > :nth-child(3) > :nth-child(2)').children('div').children('input').type("pack the court")
    cy.get('.show-form > :nth-child(3) > :nth-child(3)').children('div').children('select').select("Judiciary")
    cy.get('textarea').type('Pack the court! Something has to be done before the Supreme Court allows for states like WI' +
    " which are gerrymandered to have GOP control despite a minority of votes to appoint electorates that ignore the people's votes")
    cy.get('input[type="radio"]').last().click({force: true})
    cy.get('button[type="submit"].btn').click()
  })
})
