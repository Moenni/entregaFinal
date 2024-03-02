export class ProductsPage {
   constructor(){
      this.numero1=1000
      this.numero2=1001
      this.cerrar='#closeModal'
      }
   agregarProducto(numero){
      cy.wait(3000)
      cy.get(`[data-cy="add-to-cart-${this.numero1}"]`).click()
      cy.get(this.cerrar).click()   
     cy.wait(3000)
     cy.get(`[data-cy="add-to-cart-${this.numero1}"]`).click()
     cy.get(this.cerrar).click()  
    cy.wait(3000)
      cy.get(`[data-cy="add-to-cart-${this.numero2}"]`).click()
      cy.get(this.cerrar).click()   
     cy.wait(3000)
   }
   
    }