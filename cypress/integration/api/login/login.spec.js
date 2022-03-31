import Login from "../../../support/api/login";

describe('POST login', () => {
    it('Login com sucesso', () => {
        login.loginComSucesso()
    })

    it('Login sem sucesso', () => {
        login.loginSemSucesso()
    })
var login = new Login()

})