#language: pt

Funcionalidade: Testando CheckBox

Cenario: Single Checkbox Demo

Dado que estou na página Checkbox Demo

Quando clicar em Click on this check box

Entao deverá ser apresentada a mensagem Success - Check box is checked

@ignore
Cenario: Multiple Checkbox Demo

Dado que estou na página Checkbox Demo

Quando clicar no botão Check All

Entao verificar se todos os checkbox’s foram marcados

Quando clicar no botão Uncheck All

Entao verificar se todos os checkbox’s foram desmarcados