#language: pt

Funcionalidade: Testando CheckBox

@ignore
Cenario: Single Checkbox Demo
	Dado que estou na página Checkbox Demo
	Quando clicar em Click on this check box
	Entao deverá ser apresentada a mensagem Success - Check box is checked


Cenario: Multiple Checkbox Demo
	Dado que estou na página Checkbox Demo
	Quando marcar todos os checkbox
	Entao verificar se o botão apresenta a mensagem Uncheck All
