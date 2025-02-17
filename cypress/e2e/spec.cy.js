describe('template spec', () => {
  it('agregar tarea', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type("ir al gym{enter}")
  
    })
    })
  
  
  it('eliminar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comer sano{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('.clear-completed').click()
     })  

  it('filtrar tarea', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type("ir al evento{enter}")
      cy.get('[data-testid="text-input"]').type("beber cerveza{enter}")
      cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
      cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
   })  
