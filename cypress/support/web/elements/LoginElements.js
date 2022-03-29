
class LoginElements {
    efetuarLogin() {
        cy.title().should('eq', 'Moda Feminina, Masculina, Infantil e Perfumes - Renner')
        cy.get(':nth-child(4) > :nth-child(1) > .user-info > span').click()
        cy.get(':nth-child(3) > input')
            .type('testwebmobileapi@gmail.com').should('have.value', 'testwebmobileapi@gmail.com')
        cy.get('form > :nth-child(4)')
            .type('test#666')
        cy.get('.modal-login__form-action > .css-yl1sti').click()
        cy.title().should('eq', 'Moda Feminina, Masculina, Infantil e Perfumes - Renner')
    }
    validoLogin() {
        cy.contains('Usuario')
    }
}
export default LoginElements;