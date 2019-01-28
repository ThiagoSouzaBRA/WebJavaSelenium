$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("alert_and_modals/JavascriptAlerts.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Javascript Alerts",
  "description": "",
  "id": "javascript-alerts",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 12,
  "name": "Java Script Alert Box",
  "description": "",
  "id": "javascript-alerts;java-script-alert-box",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 13,
  "name": "que estou na página Javascript Alerts",
  "keyword": "Dado "
});
formatter.step({
  "line": 14,
  "name": "clicar no botão click for prompt box",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "preencher o textbox do alerta com \"Inmetrics\"",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar em \"OK\" no alerta",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "deverá ser exibida mensagem \"You have entered \u0027Inmetrics\u0027 !\"",
  "keyword": "Então "
});
formatter.match({
  "location": "JavascriptAlertsSteps.queEstouNaPáginaJavascriptAlerts()"
});
formatter.result({
  "duration": 8433434200,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptAlertsSteps.clicarNoBotãoClickForPromptBox()"
});
formatter.result({
  "duration": 117844500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Inmetrics",
      "offset": 35
    }
  ],
  "location": "JavascriptAlertsSteps.preencherOTextboxDoAlertaCom(String)"
});
formatter.result({
  "duration": 19264500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 11
    }
  ],
  "location": "JavascriptAlertsSteps.clicarEmNoAlerta(String)"
});
formatter.result({
  "duration": 15613300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You have entered \u0027Inmetrics\u0027 !",
      "offset": 29
    }
  ],
  "location": "JavascriptAlertsSteps.deveráSerExibidaMensagem(String)"
});
formatter.result({
  "duration": 86815700,
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
formatter.uri("progress_bars_sliders/BootstrapProgressBar.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Bootstrap Progress Bar",
  "description": "",
  "id": "bootstrap-progress-bar",
  "keyword": "Funcionalidade"
});
formatter.uri("table/TableDataSearch.feature");
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
});