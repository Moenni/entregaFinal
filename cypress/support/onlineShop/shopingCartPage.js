
export class ShoppingCartPage {
    constructor(){
        this.producto1="Buzo Negro"
        this.producto2="Zapatillas Azules"
        this.precioTotal=77.85
    }
    verificarProducto(){
      cy.contains(this.producto1).should('exist')
      cy.contains(this.producto2).should('exist')
        
       
    }
    
    verificarNombre(producto1,Price,Quantity,TotalPrice,producto2) {
        // Verifica el precio y la cantidad del producto en el carrito
        cy.contains("Buzo Negro", producto1).parent().within(() => {
          cy.get('#unitPrice', Price);
          cy.get('#productAmount', Quantity);
          // ver total
          cy.get('#totalPrice', TotalPrice);
        });
        cy.contains("Zapatillas Azules", producto2).parent().within(() => {
            cy.get('#unitPrice', Price);
            cy.get('#productAmount', Quantity);
            // ver total
            cy.get('#totalPrice', TotalPrice);
          });
      }
      clikearBotonPrecioTotal(){
        cy.xpath('//button[@class="chakra-button css-1i1ynt3"]').click()
        cy.wait(3000)
        cy.contains(this.precioTotal).should('exist')

      }
    }

