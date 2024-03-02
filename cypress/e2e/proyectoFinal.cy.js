import { ProductsPage } from "../support/onlineShop/productsPage";
import { ShoppingCartPage } from "../support/onlineShop/shopingCartPage";

describe('Entrega final',()=>{
    const numero1=1000
    const numero2=1001
    const productsPage =new ProductsPage();
    const shopingCartPage =new ShoppingCartPage();
    let data;
    before(()=>{
        cy.fixture('datos').then(datosFixture =>{
            data= datosFixture
        })
    });
    beforeEach('login',()=>{
        cy.visit('')
        cy.get('#user').type(Cypress.env().usuario + Math.floor(Math.random()*2000))
        cy.get('#pass').type(Cypress.env().password)
        cy.xpath('//span[@data-cy="Male"]').click({force:true})
        cy.get('#submitForm').click()
    })
    
    it('Ingreso a la pagina',()=>{             
     
     cy.get('#onlineshoplink',{timeout:20000}).click()
     
     productsPage.agregarProducto()
     cy.get('#goShoppingCart').click()
     shopingCartPage.verificarProducto()
     shopingCartPage.verificarNombre()
     shopingCartPage.clikearBotonPrecioTotal()
     
    })
    
})