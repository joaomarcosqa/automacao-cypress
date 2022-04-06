/// <reference types="Cypress" />

import CadastroElements from "../elements/CadastroElements";
const cadastroElements = new CadastroElements

class CadastroPage {
    
    acessarTelaDeCadastro() {
        cadastroElements.acessarTelaDeCadastro();
    }

    inserirDadosValidos() {
        cadastroElements.inserirDadosValidos();
    }

    InserirDadosInvalidos(){
        cadastroElements.inserirDadosInvalidos();
    }
}

export default CadastroPage;