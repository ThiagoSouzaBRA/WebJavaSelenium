$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("alerts_and_modals/bootstrap_modal.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Testar Bootstrap Modal",
  "description": "",
  "id": "testar-bootstrap-modal",
  "keyword": "Funcionalidade"
});
formatter.uri("alerts_and_modals/bootstrapalertmessages.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Testar Bootstrap Alert messages",
  "description": "",
  "id": "testar-bootstrap-alert-messages",
  "keyword": "Funcionalidade"
});
formatter.uri("data_pickers/BootStrapDate.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Testar BootStrapDate",
  "description": "",
  "id": "testar-bootstrapdate",
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
formatter.scenario({
  "line": 17,
  "name": "Multi Select List Demo 1",
  "description": "",
  "id": "testar-selectdropdownlist;multi-select-list-demo-1",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 18,
  "name": "que estou na página Select Dropdown List",
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "selecionar California, Ohio e Texas",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "clicar em Get All Selected",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "deverá ser apresentada a mensagem Options selected are : California,Ohio,Texas",
  "keyword": "Entao "
});
formatter.match({
  "location": "SelectDropdownListSteps.que_estou_na_página_Select_Dropdown_List()"
});
formatter.result({
  "duration": 10298829700,
  "status": "passed"
});
formatter.match({
  "location": "SelectDropdownListSteps.selecionar_California_Ohio_e_Texas()"
});
formatter.result({
  "duration": 715894700,
  "status": "passed"
});
formatter.match({
  "location": "SelectDropdownListSteps.clicar_em_Get_All_Selected()"
});
formatter.result({
  "duration": 139520600,
  "status": "passed"
});
formatter.match({
  "location": "SelectDropdownListSteps.deverá_ser_apresentada_a_mensagem_Options_selected_are_California_Ohio_Texas()"
});
formatter.result({
  "duration": 112731800,
  "status": "passed"
});
formatter.uri("table/TableSortAndSearchFeature.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Testar Tables",
  "description": "",
  "id": "testar-tables",
  "keyword": "Funcionalidade"
});
});