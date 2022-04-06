Feature: Cadastro

    Scenario: 01 Efetuar cadastro com sucesso
        Given que eu esteja na pagina de cadastro
        When inserir dados de cadastro validos
        Then efetuo cadastro com sucesso
    
    Scenario: 02 Efetuar cadastro sem sucesso
        Given que eu esteja na pagina de cadastro
        When inserir dados de cadastro invalidos
        Then não efetuo cadastro