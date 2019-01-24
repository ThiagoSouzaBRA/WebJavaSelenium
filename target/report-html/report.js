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
  "line": 5,
  "name": "Single Checkbox Demo",
  "description": "",
  "id": "testando-checkbox;single-checkbox-demo",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 7,
  "name": "que estou na página Checkbox Demo",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "clicar em Click on this check box",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "deverá ser apresentada a mensagem Success - Check box is checked",
  "keyword": "Entao "
});
formatter.match({
  "location": "CheckboxDemoSteps.queEstouNaPáginaCheckboxDemo()"
});
formatter.result({
  "duration": 6363947600,
  "status": "passed"
});
formatter.match({
  "location": "CheckboxDemoSteps.clicarEmClickOnThisCheckBox()"
});
formatter.result({
  "duration": 3433500,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat br.inmetrics.steps.inputforms.CheckboxDemoSteps.clicarEmClickOnThisCheckBox(CheckboxDemoSteps.java:25)\r\n\tat ✽.Quando clicar em Click on this check box(CheckboxDemo.feature:9)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "CheckboxDemoSteps.deveráSerApresentadaAMensagemSuccessCheckBoxIsChecked()"
});
formatter.result({
  "status": "skipped"
});
});