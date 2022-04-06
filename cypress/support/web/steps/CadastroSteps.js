/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
import CadastroPage from '../pageobjects/cadastroPage';
const loginPage = new LoginPage
const cadastroPage = new CadastroPage

Given("que eu esteja na pagina de cadastro", () => {
    loginPage.acessarSite();
    loginPage.efetuarLogin();
    cy.contains('Usuario')
})

When("inserir dados de cadastro validos", () => {
    cadastroPage.acessarTelaDeCadastro();
    cadastroPage.inserirDadosValidos();
})

Then("efetuo cadastro com sucesso", () => {
    // cy.contains('msg sucesso')
    cy.contains('Usuario')
})
When("inserir dados de cadastro invalidos", () => {
    cadastroPage.acessarTelaDeCadastro();
    cadastroPage.InserirDadosInvalidos();
})

Then("não efetuo cadastro", () => {
    // cy.contains('msg erro')
    cy.contains('Usuario')
})