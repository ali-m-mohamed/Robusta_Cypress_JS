import homePageLinks from '../pageObjects/homePageLinks'
import faqPageLinks from '../pageObjects/faqPage'
import parentRegistrationLinks from '../pageObjects/parentRegistration'
import testData from '../fixtures/testData.json'
describe('Robusta automation task', () => {
  const l = new homePageLinks()
  it('UI Test 1.1 - User visit "Home Page" and click on FAQ Icon', () => {
    l.homepage()
    l.logo().should('be.visible')
    l.faqDropDownButtton().click()
    l.commonQuestionsAndAnswers().click()
    l.commonQuestionsUrl().should('eq', 'https://www.ta3limy.com/faq')

  })
  const x = new faqPageLinks()
  it('UI Test 1.2 - user check the common questions', () => {
    var list = x.answerOneArrow().each(
      $el => {
        cy.wrap($el).click()
       
      })
  })
    const y = new parentRegistrationLinks()
    it('UI Test 1.3 - User register as a parent', () => {
      y.backToHomePage().click()
      y.registrationButtton().click()
      y.ParentButton().click()
      y.firstName().type(testData.firstName)
      y.lastName().type(testData.lastName)
      y.mobileNumber().type(testData.mobileNumber)
      y.gender().click()
      y.ageGroupDropDown().select('من 25 الي 35 سنة')
      y.password().type(testData.password)
      y.confirmPaswword().type(testData.passwordConfirmation)

      y.termsAndconditions().click({force: true})
      cy.wait(9000)
      y.robotCheckBox().click({force:false})
      // Cypress.Commands.add('solveGoogleReCAPTCHA', () => {
      //   // Wait until the iframe (Google reCAPTCHA) is totally loaded
      //   cy.wait(500);
      //   cy.get('#g-recaptcha *> iframe')
      //     .then($iframe => {
      //       const $body = $iframe.contents().find('body');
      //       cy.wrap($body)
      //         .find('.recaptcha-checkbox-border')
      //         .should('be.visible')
      //         .click();
      //     });
        
      });  
     

  })
