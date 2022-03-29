/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("que eu esteja na pagina home", () => {
    loginPage.acessarSite();
})

When("inserir dados de login validos", () => {
    loginPage.efetuarLogin();
})

Then("efetuo login com sucesso", () => {
    loginPage.validoLogin();
})