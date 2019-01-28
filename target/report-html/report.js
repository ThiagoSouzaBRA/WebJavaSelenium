$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CheckboxDemo.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Testando CheckBox",
  "description": "",
  "id": "testando-checkbox",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 12,
  "name": "Multiple Checkbox Demo",
  "description": "",
  "id": "testando-checkbox;multiple-checkbox-demo",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 13,
  "name": "que estou na página Checkbox Demo",
  "keyword": "Dado "
});
formatter.step({
  "line": 14,
  "name": "marcar todos os checkbox",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "verificar se o botão apresenta a mensagem Uncheck All",
  "keyword": "Entao "
});
formatter.match({
  "location": "CheckboxDemoSteps.queEstouNaPáginaCheckboxDemo()"
});
formatter.result({
  "duration": 8384150400,
  "status": "passed"
});
formatter.match({
  "location": "CheckboxDemoSteps.marcarTodosOsCheckbox()"
});
formatter.result({
  "duration": 417330900,
  "status": "passed"
});
formatter.match({
  "location": "CheckboxDemoSteps.verificarSeOBotãoApresentaAMensagemUncheckAll()"
});
formatter.result({
  "duration": 38948200,
  "status": "passed"
});
formatter.uri("SimpleFormDemo.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Testando Formulário",
  "description": "",
  "id": "testando-formulário",
  "keyword": "Funcionalidade"
});
});