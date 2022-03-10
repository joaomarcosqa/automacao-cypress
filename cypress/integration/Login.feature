Feature: Login site

    Scenario: Visualizar opção de recuperar senha esquecida
        Given que eu esteja na pagina home
        When inserir dados de login validos
        Then efetuo login com sucesso
