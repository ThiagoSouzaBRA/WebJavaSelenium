#language: pt

Funcionalidade: Testar Bootstrap Alert messages


@ignore
Cenario: Clicar em todos os alertas
         Dado que estou na página Bootstrap Alert messages
         Quando clicar em todos os alertas
         Entao mostrar todos os alertas
@ignore
Cenario: Clicar em todos os alertas por ordem de classificação
         Dado que estou na página Bootstrap Alert messages
         Quando clicar em alerta com classificação "btn-success"
         Entao aparecer somente alertas "alert-success"
         
