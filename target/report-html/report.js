<<<<<<< HEAD
<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ProgressBarsSliders/RangerSliders.feature");
=======
<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("alerts_and_modals/bootstrap_modal.feature");
>>>>>>> c2ad852504ba29f84240e037bb1769b20f322ad1
=======
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
>>>>>>> 792d75ea1cee7456769b69a7db408a5c8602e74c
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
<<<<<<< HEAD
  "name": "testar Range Sliders",
  "description": "",
  "id": "testar-range-sliders",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 5,
  "name": "RangeSliderCinza",
  "description": "",
  "id": "testar-range-sliders;rangeslidercinza",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 6,
  "name": "que estou na pagina Range Sliders",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "mover barra da RangeSliderCinza",
  "keyword": "Quando "
});
formatter.step({
  "line": 8,
  "name": "verificar se valor da RangeSliderCinza foi alterado",
  "keyword": "Entao "
});
formatter.step({
  "line": 9,
  "name": "mover barra da RangeSliderVerde",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "verificar se valor da RangeSliderVerde foi alterado",
  "keyword": "Entao "
});
formatter.step({
  "line": 11,
  "name": "mover barra da RangeSliderLaranja",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "verificar se valor da RangeSliderLaranja foi alterado",
  "keyword": "Entao "
});
formatter.match({
  "location": "RangeSlidersSteps.que_estou_na_pagina_Range_Sliders()"
});
formatter.result({
  "duration": 10636422900,
  "status": "passed"
});
formatter.match({
  "location": "RangeSlidersSteps.mover_barra_da_RangeSliderCinza()"
});
formatter.result({
  "duration": 217014800,
  "status": "passed"
});
formatter.match({
  "location": "RangeSlidersSteps.verificar_se_valor_da_RangeSliderCinza_foi_alterado()"
});
formatter.result({
  "duration": 63396800,
  "status": "passed"
});
formatter.match({
  "location": "RangeSlidersSteps.mover_barra_da_RangeSliderVerde()"
});
formatter.result({
  "duration": 138875600,
  "status": "passed"
});
formatter.match({
  "location": "RangeSlidersSteps.verificar_se_valor_da_RangeSliderVerde_foi_alterado()"
});
formatter.result({
  "duration": 54443200,
  "status": "passed"
});
formatter.match({
  "location": "RangeSlidersSteps.mover_barra_da_RangeSliderLaranja()"
});
formatter.result({
  "duration": 110427700,
  "status": "passed"
});
formatter.match({
  "location": "RangeSlidersSteps.verificar_se_valor_da_RangeSliderLaranja_foi_alterado()"
});
formatter.result({
  "duration": 46033900,
  "status": "passed"
});
formatter.uri("input_forms/CheckboxDemo.feature");
=======
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
formatter.scenario({
  "line": 6,
  "name": "Select List Demo",
  "description": "",
  "id": "testar-selectdropdownlist;select-list-demo",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 7,
  "name": "que estou na página Select Dropdown List",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "selecionar Friday",
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "deverá ser apresentada a mensagem Day selected :- Friday",
  "keyword": "Entao "
});
formatter.match({
  "location": "SelectDropdownListSteps.que_estou_na_página_Select_Dropdown_List()"
});
formatter.result({
  "duration": 8255044700,
  "status": "passed"
});
formatter.match({
  "location": "SelectDropdownListSteps.selecionar_Friday()"
});
formatter.result({
  "duration": 111108300,
  "status": "passed"
});
formatter.match({
  "location": "SelectDropdownListSteps.deverá_ser_apresentada_a_mensagem_Day_selected_Friday()"
});
formatter.result({
  "duration": 63381300,
  "status": "passed"
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
<<<<<<< HEAD
formatter.uri("table/TableDataSearch.feature");
>>>>>>> c2ad852504ba29f84240e037bb1769b20f322ad1
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
<<<<<<< HEAD
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
=======
formatter.uri("table/TableSortAndSearchFeature.feature");
>>>>>>> 792d75ea1cee7456769b69a7db408a5c8602e74c
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
<<<<<<< HEAD
  "name": "Testando Formulário",
  "description": "",
  "id": "testando-formulário",
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
=======
  "name": "Testando Tables",
  "description": "",
  "id": "testando-tables",
>>>>>>> 0f24e92f2a1387b82fd0f389a1d0a73afacf2b03
>>>>>>> c2ad852504ba29f84240e037bb1769b20f322ad1
=======
  "name": "Testar Tables",
  "description": "",
  "id": "testar-tables",
>>>>>>> 792d75ea1cee7456769b69a7db408a5c8602e74c
  "keyword": "Funcionalidade"
});
});