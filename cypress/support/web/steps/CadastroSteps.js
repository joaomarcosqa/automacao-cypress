/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
import CadastroPage from '../pageobjects/cadastroPage';
const loginPage = new LoginPage
const cadastroPage = new CadastroPage

Given("que eu esteja na pagina de cadastro", () => {
    cadastroPage.acessarTelaDeCadastro();
})

When("inserir dados de cadastro validos", () => {
    cadastroPage.inserirDadosValidos();
})

Then("efetuo cadastro com sucesso", () => {
    cy.contains('msg sucesso')
})
When("inserir dados de cadastro invalidos", () => {
    cadastroPage.InserirDadosInvalidos();
})

Then("não efetuo cadastro", () => {
    cy.contains('msg erro')
})