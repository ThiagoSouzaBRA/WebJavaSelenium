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
formatter.uri("alerts_and_modals/bootstrap_modal.feature");
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
formatter.scenario({
  "line": 5,
  "name": "Data - Futuras Datas",
  "description": "",
  "id": "testar-bootstrapdate;data---futuras-datas",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 6,
  "name": "que estou na página Bootstrap Date Pickers",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "selecionar a box data",
  "keyword": "Quando "
});
formatter.step({
  "line": 8,
  "name": "selecionar ano seguinte com base no atual ano",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "deverá ser nulo o campo de data",
  "keyword": "Entao "
});
formatter.match({
  "location": "BootStrapDateSteps.que_estou_na_página_Bootstrap_Date_Pickers()"
});
formatter.result({
  "duration": 8870342800,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_a_box_data()"
});
formatter.result({
  "duration": 244582800,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_ano_seguinte_com_base_no_atual_ano()"
});
formatter.result({
  "duration": 545400700,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.deverá_ser_nulo_o_campo_de_data()"
});
formatter.result({
  "duration": 5826865300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Data - Testar Sábado Desativado",
  "description": "",
  "id": "testar-bootstrapdate;data---testar-sábado-desativado",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 12,
  "name": "que estou na página Bootstrap Date Pickers",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "selecionar a box data",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "selecionar algum dia que esteja na coluna sabado",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "deverá ser nulo o campo de data",
  "keyword": "Entao "
});
formatter.match({
  "location": "BootStrapDateSteps.que_estou_na_página_Bootstrap_Date_Pickers()"
});
formatter.result({
  "duration": 7432289900,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_a_box_data()"
});
formatter.result({
  "duration": 198750100,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_algum_dia_que_esteja_na_coluna_sabado()"
});
formatter.result({
  "duration": 166259400,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.deverá_ser_nulo_o_campo_de_data()"
});
formatter.result({
  "duration": 5859458100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Data - Selecionar dia atual",
  "description": "",
  "id": "testar-bootstrapdate;data---selecionar-dia-atual",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 18,
  "name": "que estou na página Bootstrap Date Pickers",
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "selecionar a box data",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "clicar em Today",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "deverá ser alterado o campo de data para a data atual",
  "keyword": "Entao "
});
formatter.match({
  "location": "BootStrapDateSteps.que_estou_na_página_Bootstrap_Date_Pickers()"
});
formatter.result({
  "duration": 7958172100,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_a_box_data()"
});
formatter.result({
  "duration": 196214600,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.clicar_em_Today()"
});
formatter.result({
  "duration": 168437400,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.deverá_ser_alterado_o_campo_de_data_para_a_data_atual()"
});
formatter.result({
  "duration": 5820093300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Data - Limpar data inserida",
  "description": "",
  "id": "testar-bootstrapdate;data---limpar-data-inserida",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 24,
  "name": "que estou na página Bootstrap Date Pickers",
  "keyword": "Dado "
});
formatter.step({
  "line": 25,
  "name": "selecionar a box data",
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "clicar em Today",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "selecionar a box data",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "clicar em Clear",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "deverá ser nulo o campo de data",
  "keyword": "Entao "
});
formatter.match({
  "location": "BootStrapDateSteps.que_estou_na_página_Bootstrap_Date_Pickers()"
});
formatter.result({
  "duration": 8807471600,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_a_box_data()"
});
formatter.result({
  "duration": 249441900,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.clicar_em_Today()"
});
formatter.result({
  "duration": 208893300,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_a_box_data()"
});
formatter.result({
  "duration": 193302000,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.clicar_em_Clear()"
});
formatter.result({
  "duration": 202086700,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.deverá_ser_nulo_o_campo_de_data()"
});
formatter.result({
  "duration": 5862917700,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Limite de Data - Testar Domingo Desativado",
  "description": "",
  "id": "testar-bootstrapdate;limite-de-data---testar-domingo-desativado",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 33,
  "name": "que estou na página Bootstrap Date Pickers",
  "keyword": "Dado "
});
formatter.step({
  "line": 34,
  "name": "selecionar a box data range",
  "keyword": "Quando "
});
formatter.step({
  "line": 35,
  "name": "selecionar alguma data que esteja na coluna domingo",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "campo box data range não deverá ser alterado",
  "keyword": "Entao "
});
formatter.match({
  "location": "BootStrapDateSteps.que_estou_na_página_Bootstrap_Date_Pickers()"
});
formatter.result({
  "duration": 6364163100,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_a_box_data_range()"
});
formatter.result({
  "duration": 175195100,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_alguma_data_que_esteja_na_coluna_domingo()"
});
formatter.result({
  "duration": 170835500,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.campo_box_data_range_não_deverá_ser_alterado()"
});
formatter.result({
  "duration": 5828013600,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Limite de Data - Testar inserção de datas em dois campos",
  "description": "",
  "id": "testar-bootstrapdate;limite-de-data---testar-inserção-de-datas-em-dois-campos",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 39,
  "name": "que estou na página Bootstrap Date Pickers",
  "keyword": "Dado "
});
formatter.step({
  "line": 40,
  "name": "selecionar a box data range",
  "keyword": "Quando "
});
formatter.step({
  "line": 41,
  "name": "selecionar alguma data",
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "campo box data range da direita deverá ser igual ao box data range da esquerda",
  "keyword": "Entao "
});
formatter.match({
  "location": "BootStrapDateSteps.que_estou_na_página_Bootstrap_Date_Pickers()"
});
formatter.result({
  "duration": 6941703300,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_a_box_data_range()"
});
formatter.result({
  "duration": 157666700,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_alguma_data()"
});
formatter.result({
  "duration": 207997400,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.campo_box_data_range_da_direita_deverá_ser_igual_ao_box_data_range_da_esquerda()"
});
formatter.result({
  "duration": 5850045000,
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
formatter.uri("progress_bars_sliders/RangerSliders.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "testar Range Sliders",
  "description": "",
  "id": "testar-range-sliders",
  "keyword": "Funcionalidade"
});
formatter.uri("table/FilterTable.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Testar Table Filter Demo",
  "description": "",
  "id": "testar-table-filter-demo",
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