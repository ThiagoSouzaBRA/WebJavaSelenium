#language: pt

Funcionalidade: Testar BootStrapDate
@ignore
Cenario: Data - Futuras Datas
         Dado que estou na página Bootstrap Date Pickers
         Quando selecionar a box data
         E selecionar ano seguinte com base no atual ano
         Entao deverá ser nulo o campo de data
@ignore
Cenario: Data - Testar Sábado Desativado
         Dado que estou na página Bootstrap Date Pickers
         Quando selecionar a box data
         E selecionar algum dia que esteja na coluna sabado
         Entao deverá ser nulo o campo de data
@ignore
Cenario: Data - Selecionar dia atual
         Dado que estou na página Bootstrap Date Pickers
         Quando selecionar a box data
         E clicar em Today
         Entao deverá ser alterado o campo de data para a data atual
@ignore
Cenario: Data - Limpar data inserida
         Dado que estou na página Bootstrap Date Pickers
         Quando selecionar a box data
         E clicar em Today
         E selecionar a box data
         E clicar em Clear
         Entao deverá ser nulo o campo de data

@ignore
Cenario: Limite de Data - Testar Domingo Desativado
         Dado que estou na página Bootstrap Date Pickers
         Quando selecionar a box data range
         E selecionar alguma data que esteja na coluna domingo
         Entao campo box data range não deverá ser alterado
@ignore     
Cenario: Limite de Data - Testar inserção de datas em dois campos
         Dado que estou na página Bootstrap Date Pickers
         Quando selecionar a box data range
         E selecionar alguma data
         Entao campo box data range da direita deverá ser igual ao box data range da esquerda

