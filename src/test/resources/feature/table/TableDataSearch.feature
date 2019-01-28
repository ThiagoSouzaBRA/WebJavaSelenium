#language: pt

Funcionalidade: Testando Tables

@ignore
Cenário: Tasks - Válida
	Dado que estou na página Table Data Search
	Quando pesquisar por "Bug"
	Então a tebela deverá exibir apenas a Task "Bug fixing"

@ignore	
Cenário: Tasks - Inválida
	Dado que estou na página Table Data Search
	Quando pesquisar por "qwert"
	Então a tebela deverá exibir apenas a Task "No results found"

@ignore
Cenário: Listed Users
	Dado que estou na página Table Data Search
	Quando clicar no botão filter
	Então verificar se os campos "#" "Username" "First Name" "Last Name" estão ativados

@ignore
Cenário: Listed Users - Pesquisar
	Dado que estou na página Table Data Search
	Quando clicar no botão filter
	E pesquisar pelo username "jacobs"
	Então a tabela deverá exibir apenas o usuário "jacobs"