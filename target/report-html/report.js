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
<<<<<<< HEAD
  "line": 12,
  "name": "Multiple Checkbox Demo",
  "description": "",
  "id": "testando-checkbox;multiple-checkbox-demo",
=======
  "line": 18,
  "name": "Multi Select List Demo 1",
  "description": "",
  "id": "testar-selectdropdownlist;multi-select-list-demo-1",
>>>>>>> 0e97075e3f254b047bdecee6c474c08c8c144bab
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 0e97075e3f254b047bdecee6c474c08c8c144bab
  "keyword": "Entao "
});
formatter.match({
  "location": "SelectDropdownListSteps.que_estou_na_página_Select_Dropdown_List()"
});
formatter.result({
<<<<<<< HEAD
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
=======
  "duration": 13161525813,
  "status": "passed"
});
formatter.match({
  "location": "SelectDropdownListSteps.selecionar_California_Ohio_e_Texas()"
});
formatter.result({
  "duration": 379795901,
  "status": "passed"
});
formatter.match({
  "location": "SelectDropdownListSteps.clicar_em_Get_All_Selected()"
});
formatter.result({
  "duration": 69554731,
  "status": "passed"
});
formatter.match({
  "location": "SelectDropdownListSteps.deverá_ser_apresentada_a_mensagem_Options_selected_are_California_Ohio_Texas()"
});
formatter.result({
  "duration": 42483548,
  "status": "passed"
>>>>>>> 0e97075e3f254b047bdecee6c474c08c8c144bab
});
});