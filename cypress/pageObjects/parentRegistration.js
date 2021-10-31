class parentRegistrationLinks {

   backToHomePage() {
      return cy.get('#root > div > header > div > h1 > a > img')
   }
   registrationButtton() {
      return cy.get('#root > div > div:nth-child(3) > div > section.css-8lg940.e1a5eqzl1 > button')

   }
   ParentButton(){
      return cy.get('#roles > div:nth-child(1) > label')
   }
   firstName() {
      return cy.get('#firstName')
   }
   lastName(){
      return cy.get('#lastName')
   }
   mobileNumber(){
      return cy.get('#mobileNumber')
   }
   gender(){
      return cy.get('#gender > div:nth-child(1) > label')
   }
   ageGroupDropDown(){
      return cy.get('#ageRange')
   }
  password(){
     return cy.get('#password')
  }
  confirmPaswword(){
     return cy.get('#passwordConfirmation')
  }
  termsAndconditions(){
     return cy.xpath('//input[@id="termsAndConditionsCheck"]')
  
  }
  robotCheckBox(){
     return cy.xpath('//body')
  }
}

export default parentRegistrationLinks