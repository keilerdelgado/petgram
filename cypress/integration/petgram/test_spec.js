/*global describe, it, cy */
describe('Petgram', function () {
  it('para ver si la app funciona', function (){
    cy.visit('/')
  })

  it('navegar a una categoria y ver fotos', function(){
    //url donde se realiza el test
    cy.visit('/pet/1')
    //seleccionar un nodo si existe
    cy.get('article')
  })

  it('podemos navegar con la navbar a la home', function(){
    //url del test
    cy.visit('/pet/1')
    //le indico un nodo y le hago click
    cy.get('nav a').first().click()
    //verifica si el resultado de lo anterior es igual a home /
    cy.url().should('eq',Cypress.config().baseUrl)
  })

  it('los usuarios no registrados ven los formularios de signup y login en favs', function (){
    //url del test
    cy.visit('/favs')
    //en esas url deberian haber 2 formularios
    cy.get('form').should('have.length',2)
  })
})