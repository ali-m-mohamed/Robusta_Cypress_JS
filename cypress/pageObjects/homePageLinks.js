class homePageLinks {

   homepage() {
      return cy.visit('https://www.ta3limy.com/')
   }
   faqDropDownButtton() {
      return cy.get('#help-menu > svg')

   }
   logo(){
      return cy.get('#root > div > header > div > h1 > a > img')
   }
   commonQuestionsAndAnswers() {
      return cy.get('#root > div > header > div > div > div > ul > li.link > a', {timeout:12000} )
   }
   commonQuestionsUrl(){
      return cy.url()
   }
}

export default homePageLinks