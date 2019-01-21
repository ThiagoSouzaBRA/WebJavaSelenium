$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("teste.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Input Forms",
  "description": "\nAbrir tela\nAcessar Input Forms\n\nCen�rio: Devo_abrir_tela_home\nDado que eu acesso o site\nQuando clico no botao\nEntao verifico tela",
  "id": "input-forms",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@InputForms"
    }
  ]
});
});