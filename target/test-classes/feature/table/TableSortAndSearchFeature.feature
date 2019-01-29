#language: pt

Funcionalidade: Testar Tables

@ignore
Cenario: Pesquisar por campo texto
         Dado que estou na página Table Sort And Search
         Quando digitar no campo de texto "A Cox"
         Entao deverá ser apresentado "A. Cox" no campo "Name"

@ignore
Cenario: Pesquisar por Categorias
         Dado que estou na página Table Sort And Search
         Quando mudar ordem do campo "Name"
         Entao deverá ser apresentado no campo "Name"
         
@ignore
Cenario: Apresentar N dados
         Dado que estou na página Table Sort And Search
         Quando clicar no campo List
         E selecionar "25" quantidade
         Entao deverá ser apresentado 25 quantidades