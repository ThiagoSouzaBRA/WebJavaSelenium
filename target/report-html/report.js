$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SelectDropdownList.feature");
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
formatter.scenario({
  "line": 18,
  "name": "Multi Select List Demo 1",
  "description": "",
  "id": "testar-selectdropdownlist;multi-select-list-demo-1",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 17,
      "name": "@testar"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "que estou na página Select Dropdown List",
  "keyword": "Dado "
});
formatter.step({
  "line": 20,
  "name": "selecionar California, Ohio e Texas",
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "clicar em Get All Selected",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "deverá ser apresentada a mensagem Options selected are : California,Ohio,Texas",
  "keyword": "Entao "
});
formatter.match({
  "location": "SelectDropdownListSteps.que_estou_na_página_Select_Dropdown_List()"
});
formatter.result({
  "duration": 9041171900,
  "status": "passed"
});
formatter.match({
  "location": "SelectDropdownListSteps.selecionar_California_Ohio_e_Texas()"
});
formatter.result({
  "duration": 450065900,
  "status": "passed"
});
formatter.match({
  "location": "SelectDropdownListSteps.clicar_em_Get_All_Selected()"
});
formatter.result({
  "duration": 140149100,
  "status": "passed"
});
formatter.match({
  "location": "SelectDropdownListSteps.deverá_ser_apresentada_a_mensagem_Options_selected_are_California_Ohio_Texas()"
});
formatter.result({
  "duration": 98781100,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c...ions selected are : [California,]Ohio,Texas\u003e but was:\u003c...ions selected are : []Ohio,Texas\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat br.inmetrics.steps.inputforms.SelectDropdownListSteps.deverá_ser_apresentada_a_mensagem_Options_selected_are_California_Ohio_Texas(SelectDropdownListSteps.java:90)\r\n\tat ✽.Entao deverá ser apresentada a mensagem Options selected are : California,Ohio,Texas(SelectDropdownList.feature:22)\r\n",
  "status": "failed"
});
});