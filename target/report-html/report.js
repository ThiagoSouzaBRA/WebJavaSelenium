$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Table/TableDataSearch.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Testando Tables",
  "description": "",
  "id": "testando-tables",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 23,
  "name": "Listed Users - Pesquisar",
  "description": "",
  "id": "testando-tables;listed-users---pesquisar",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 24,
  "name": "que estou na página Table Data Search",
  "keyword": "Dado "
});
formatter.step({
  "line": 25,
  "name": "clicar no botão filter",
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "pesquisar pelo username \"jacobs\"",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "a tabela deverá exibir apenas o usuário \"jacobs\"",
  "keyword": "Então "
});
formatter.match({
  "location": "TableDataSearchSteps.queEstouNaPáginaTableDataSearch()"
});
formatter.result({
  "duration": 8476717900,
  "status": "passed"
});
formatter.match({
  "location": "TableDataSearchSteps.clicarNoBotãoFilter()"
});
formatter.result({
  "duration": 129270600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jacobs",
      "offset": 25
    }
  ],
  "location": "TableDataSearchSteps.pesquisarPeloUsername(String)"
});
formatter.result({
  "duration": 268705600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jacobs",
      "offset": 41
    }
  ],
  "location": "TableDataSearchSteps.aTabelaDeveráExibirApenasOUsuário(String)"
});
formatter.result({
  "duration": 66343000,
  "status": "passed"
});
formatter.uri("input_forms/CheckboxDemo.feature");
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
formatter.uri("input_forms/RadioButtonsDemo.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Testar RadioButtonsDemo",
  "description": "",
  "id": "testar-radiobuttonsdemo",
  "keyword": "Funcionalidade"
});
formatter.uri("input_forms/SelectDropdownList.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Testar SelectDropdownList",
  "description": "",
  "id": "testar-selectdropdownlist",
  "keyword": "Funcionalidade"
});
formatter.uri("input_forms/SimpleFormDemo.feature");
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