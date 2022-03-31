
class Login{
    
    loginComSucesso(){
        cy.request({
                method: 'POST',
                url: 'https://k63xguauui.execute-api.us-east-1.amazonaws.com/prod/auth/signin',
                body: {
                    "email": "testeepeca@gmail.com",
                    "senha": "123456teste"
                }
        })
        .as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(200)
            expect(res.body).to.have.property('message', 'SUCESSO: Cadastro realizado')
            expect(res.body).to.have.property('ERROR', false)

        })
        }

    loginSemSucesso(){
        cy.request({
            method: 'POST',
            url: 'https://k63xguauui.execute-api.us-east-1.amazonaws.com/prod/auth/signin',
            body: {
                "email": "testeepecaaaa@gmail.com",
                "senha": "123456teste"
            }
    })
    .as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(500)
            expect(res.body).to.have.property('message', 'API ERROR')
            expect(res.body).to.have.property('ERROR', true)
        })
}
}

export default Login;