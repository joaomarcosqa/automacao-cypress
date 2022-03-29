/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site e faz login
    efetuarLogin() {
        (loginElements.efetuarLogin())
    }

    // Verifica seesta logado com sucesso
    validoLogin() {
        (loginElements.validoLogin())
    }
}

export default LoginPage;