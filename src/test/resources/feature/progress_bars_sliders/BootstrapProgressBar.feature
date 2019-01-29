#language: pt

Funcionalidade: Bootstrap Progress Bar

@ignore
Cenário: Progress Bar for Download
	Dado que estou na página Bootstrap Progress Bar
	Quando clicar no botão Download
	Então verificar se o progresso do download atinge "100%"
