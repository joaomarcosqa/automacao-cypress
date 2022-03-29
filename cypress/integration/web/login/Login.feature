Feature: Login site

    Scenario: Efetuar login com sucesso
        Given que eu esteja na pagina home
        When inserir dados de login validos
        Then efetuo login com sucesso
