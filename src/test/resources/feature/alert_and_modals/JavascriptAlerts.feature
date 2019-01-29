#language: pt

Funcionalidade: Javascript Alerts

@ignore
Cenário: Java Script Confirm Box
	Dado que estou na página Javascript Alerts
	Quando clicar no botão click me do Java Script Confirm Box
	E clicar em "OK" no alerta
	Então deverá ser exibida a mensagem "You pressed OK!"

@ignore
Cenário: Java Script Alert Box
	Dado que estou na página Javascript Alerts
	Quando clicar no botão click for prompt box
	E preencher o textbox do alerta com "Inmetrics"
	E clicar em "OK" no alerta
	Então deverá ser exibida mensagem "You have entered 'Inmetrics' !"