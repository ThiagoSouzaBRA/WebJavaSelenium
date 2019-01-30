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
  "line": 6,
  "name": "Java Script Confirm Box",
  "description": "",
  "id": "javascript-alerts;java-script-confirm-box",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 5,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que estou na página Javascript Alerts",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "clicar no botão click me do Java Script Confirm Box",
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "clicar em \"OK\" no alerta",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "deverá ser exibida a mensagem \"You pressed OK!\"",
  "keyword": "Então "
});
formatter.match({
  "location": "JavascriptAlertsSteps.queEstouNaPáginaJavascriptAlerts()"
});
formatter.result({
  "duration": 8621658300,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptAlertsSteps.clicarNoBotãoClickMeDoJavaScriptConfirmBox()"
});
formatter.result({
  "duration": 166659400,
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
  "duration": 22521100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You pressed OK!",
      "offset": 31
    }
  ],
  "location": "JavascriptAlertsSteps.deveráSerExibidaAMensagem(String)"
});
formatter.result({
  "duration": 5846353100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Java Script Alert Box",
  "description": "",
  "id": "javascript-alerts;java-script-alert-box",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 12,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "que estou na página Javascript Alerts",
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "clicar no botão click for prompt box",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "preencher o textbox do alerta com \"Inmetrics\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "clicar em \"OK\" no alerta",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "deverá ser exibida mensagem \"You have entered \u0027Inmetrics\u0027 !\"",
  "keyword": "Então "
});
formatter.match({
  "location": "JavascriptAlertsSteps.queEstouNaPáginaJavascriptAlerts()"
});
formatter.result({
  "duration": 6184533700,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptAlertsSteps.clicarNoBotãoClickForPromptBox()"
});
formatter.result({
  "duration": 112462300,
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
  "duration": 15174000,
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
  "duration": 13038300,
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
  "duration": 5909382800,
  "status": "passed"
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
formatter.scenario({
  "line": 6,
  "name": "Modal Unico - Salvar Mudanças",
  "description": "",
  "id": "testar-bootstrap-modal;modal-unico---salvar-mudanças",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que estou na página Bootstrap Modal Example for Automation",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "clicar em Launch Modal dentro de Single Modal Example",
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "visualizar a aba Modal Title",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "enter no botão Save Changes First",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "fechar aba Modal Title",
  "keyword": "Entao "
});
formatter.match({
  "location": "BootstrapModalSteps.que_estou_na_página_Bootstrap_Modal_Example_for_Automation()"
});
formatter.result({
  "duration": 6311869500,
  "status": "passed"
});
formatter.match({
  "location": "BootstrapModalSteps.clicar_em_Launch_Modal_dentro_de_Single_Modal_Example()"
});
formatter.result({
  "duration": 150051000,
  "status": "passed"
});
formatter.match({
  "location": "BootstrapModalSteps.visualizar_a_aba_Modal_Title()"
});
formatter.result({
  "duration": 51441700,
  "status": "passed"
});
formatter.match({
  "location": "BootstrapModalSteps.clicar_no_botão_Save_Changes()"
});
formatter.result({
  "duration": 1632074600,
  "status": "passed"
});
formatter.match({
  "location": "BootstrapModalSteps.fechar_aba_Modal_Title()"
});
formatter.result({
  "duration": 5839004600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Modal Multiplo - Salvar Modal",
  "description": "",
  "id": "testar-bootstrap-modal;modal-multiplo---salvar-modal",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 13,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "que estou na página Bootstrap Modal Example for Automation",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "clicar em Launch Modal dentro de Multiple Modal Example",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "visualizar a aba First Modal",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "enter no botão Save Changes do First Modal",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "fechar aba First Modal",
  "keyword": "Entao "
});
formatter.match({
  "location": "BootstrapModalSteps.que_estou_na_página_Bootstrap_Modal_Example_for_Automation()"
});
formatter.result({
  "duration": 6221486800,
  "status": "passed"
});
formatter.match({
  "location": "BootstrapModalSteps.clicar_em_Launch_Modal_dentro_de_Multiple_Modal_Example()"
});
formatter.result({
  "duration": 160859500,
  "status": "passed"
});
formatter.match({
  "location": "BootstrapModalSteps.visualizar_a_aba_First_Modal()"
});
formatter.result({
  "duration": 53209500,
  "status": "passed"
});
formatter.match({
  "location": "BootstrapModalSteps.clicar_no_botão_Save_Changes_do_First_Modal()"
});
formatter.result({
  "duration": 5603121500,
  "status": "passed"
});
formatter.match({
  "location": "BootstrapModalSteps.fechar_aba_First_Modal()"
});
formatter.result({
  "duration": 5820118200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Modal Multiplo - Salvar Segundo Modal",
  "description": "",
  "id": "testar-bootstrap-modal;modal-multiplo---salvar-segundo-modal",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 21,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "que estou na página Bootstrap Modal Example for Automation",
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "clicar em Launch Modal dentro de Multiple Modal Example",
  "keyword": "Quando "
});
formatter.step({
  "line": 25,
  "name": "visualizar a aba First Modal",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "clicar no botão Launch Modal",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "visualizar a aba Modal 2",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "enter no botão close",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "fechar aba First Modal 2",
  "keyword": "Entao "
});
formatter.match({
  "location": "BootstrapModalSteps.que_estou_na_página_Bootstrap_Modal_Example_for_Automation()"
});
formatter.result({
  "duration": 5962372900,
  "status": "passed"
});
formatter.match({
  "location": "BootstrapModalSteps.clicar_em_Launch_Modal_dentro_de_Multiple_Modal_Example()"
});
formatter.result({
  "duration": 123036600,
  "status": "passed"
});
formatter.match({
  "location": "BootstrapModalSteps.visualizar_a_aba_First_Modal()"
});
formatter.result({
  "duration": 32473000,
  "status": "passed"
});
formatter.match({
  "location": "BootstrapModalSteps.clicar_no_botão_Launch_Modal()"
});
formatter.result({
  "duration": 1106613600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "BootstrapModalSteps.visualizar_a_aba_Modal(int)"
});
formatter.result({
  "duration": 30941600,
  "status": "passed"
});
formatter.match({
  "location": "BootstrapModalSteps.clicarNoBotãoSaveChanges()"
});
formatter.result({
  "duration": 1144718000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "BootstrapModalSteps.fechar_aba_First_Modal_2(int)"
});
formatter.result({
  "duration": 112833500,
  "status": "passed"
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
formatter.scenario({
  "line": 7,
  "name": "Clicar em todos os alertas",
  "description": "",
  "id": "testar-bootstrap-alert-messages;clicar-em-todos-os-alertas",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 6,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que estou na página Bootstrap Alert messages",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "clicar em todos os alertas",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "mostrar todos os alertas",
  "keyword": "Entao "
});
formatter.match({
  "location": "BootStrapAlertMessagesSteps.que_estou_na_página_Bootstrap_Alert_messages()"
});
formatter.result({
  "duration": 6743359700,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapAlertMessagesSteps.clicar_em_todos_os_alertas()"
});
formatter.result({
  "duration": 1040303600,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapAlertMessagesSteps.mostrar_todos_os_alertas()"
});
formatter.result({
  "duration": 5788246200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Clicar em todos os alertas por ordem de classificação",
  "description": "",
  "id": "testar-bootstrap-alert-messages;clicar-em-todos-os-alertas-por-ordem-de-classificação",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 11,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "que estou na página Bootstrap Alert messages",
  "keyword": "Dado "
});
formatter.step({
  "line": 14,
  "name": "clicar em alerta com classificação \"btn-success\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "aparecer somente alertas \"alert-success\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "BootStrapAlertMessagesSteps.que_estou_na_página_Bootstrap_Alert_messages()"
});
formatter.result({
  "duration": 5800498200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn-success",
      "offset": 36
    }
  ],
  "location": "BootStrapAlertMessagesSteps.clicar_em_alerta_com_classificação(String)"
});
formatter.result({
  "duration": 266318900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alert-success",
      "offset": 26
    }
  ],
  "location": "BootStrapAlertMessagesSteps.aparecerSomenteAlertas(String)"
});
formatter.result({
  "duration": 5803976000,
  "status": "passed"
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
  "keyword": "Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@ignore"
    }
  ]
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
  "duration": 6395346600,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_a_box_data()"
});
formatter.result({
  "duration": 208244800,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_ano_seguinte_com_base_no_atual_ano()"
});
formatter.result({
  "duration": 423996500,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.deverá_ser_nulo_o_campo_de_data()"
});
formatter.result({
  "duration": 5864821900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Data - Testar Sábado Desativado",
  "description": "",
  "id": "testar-bootstrapdate;data---testar-sábado-desativado",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 10,
      "name": "@ignore"
    }
  ]
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
  "duration": 6543084800,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_a_box_data()"
});
formatter.result({
  "duration": 206518400,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_algum_dia_que_esteja_na_coluna_sabado()"
});
formatter.result({
  "duration": 168683500,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.deverá_ser_nulo_o_campo_de_data()"
});
formatter.result({
  "duration": 5805376000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Data - Selecionar dia atual",
  "description": "",
  "id": "testar-bootstrapdate;data---selecionar-dia-atual",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 16,
      "name": "@ignore"
    }
  ]
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
  "duration": 6483741800,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_a_box_data()"
});
formatter.result({
  "duration": 191139800,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.clicar_em_Today()"
});
formatter.result({
  "duration": 173934900,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.deverá_ser_alterado_o_campo_de_data_para_a_data_atual()"
});
formatter.result({
  "duration": 5813829900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Data - Limpar data inserida",
  "description": "",
  "id": "testar-bootstrapdate;data---limpar-data-inserida",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 22,
      "name": "@ignore"
    }
  ]
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
  "duration": 6946240200,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_a_box_data()"
});
formatter.result({
  "duration": 226615800,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.clicar_em_Today()"
});
formatter.result({
  "duration": 166994400,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_a_box_data()"
});
formatter.result({
  "duration": 224656000,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.clicar_em_Clear()"
});
formatter.result({
  "duration": 156221300,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.deverá_ser_nulo_o_campo_de_data()"
});
formatter.result({
  "duration": 5858945500,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Limite de Data - Testar Domingo Desativado",
  "description": "",
  "id": "testar-bootstrapdate;limite-de-data---testar-domingo-desativado",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 31,
      "name": "@ignore"
    }
  ]
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
  "duration": 6536751500,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_a_box_data_range()"
});
formatter.result({
  "duration": 188469200,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_alguma_data_que_esteja_na_coluna_domingo()"
});
formatter.result({
  "duration": 195566500,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.campo_box_data_range_não_deverá_ser_alterado()"
});
formatter.result({
  "duration": 5779344800,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Limite de Data - Testar inserção de datas em dois campos",
  "description": "",
  "id": "testar-bootstrapdate;limite-de-data---testar-inserção-de-datas-em-dois-campos",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 37,
      "name": "@ignore"
    }
  ]
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
  "duration": 6993597300,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_a_box_data_range()"
});
formatter.result({
  "duration": 185831400,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.selecionar_alguma_data()"
});
formatter.result({
  "duration": 315424600,
  "status": "passed"
});
formatter.match({
  "location": "BootStrapDateSteps.campo_box_data_range_da_direita_deverá_ser_igual_ao_box_data_range_da_esquerda()"
});
formatter.result({
  "duration": 5887015700,
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
formatter.scenario({
  "line": 6,
  "name": "Single Checkbox Demo",
  "description": "",
  "id": "testando-checkbox;single-checkbox-demo",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que estou na página Checkbox Demo",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "clicar em Click on this check box",
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "deverá ser apresentada a mensagem Success - Check box is checked",
  "keyword": "Entao "
});
formatter.match({
  "location": "CheckboxDemoSteps.queEstouNaPáginaCheckboxDemo()"
});
formatter.result({
  "duration": 6246132700,
  "status": "passed"
});
formatter.match({
  "location": "CheckboxDemoSteps.clicarEmClickOnThisCheckBox()"
});
formatter.result({
  "duration": 154685200,
  "status": "passed"
});
formatter.match({
  "location": "CheckboxDemoSteps.deveráSerApresentadaAMensagemSuccessCheckBoxIsChecked()"
});
formatter.result({
  "duration": 5877069100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Multiple Checkbox Demo",
  "description": "",
  "id": "testando-checkbox;multiple-checkbox-demo",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 11,
      "name": "@ignore"
    }
  ]
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
  "duration": 6382280200,
  "status": "passed"
});
formatter.match({
  "location": "CheckboxDemoSteps.marcarTodosOsCheckbox()"
});
formatter.result({
  "duration": 426377200,
  "status": "passed"
});
formatter.match({
  "location": "CheckboxDemoSteps.verificarSeOBotãoApresentaAMensagemUncheckAll()"
});
formatter.result({
  "duration": 5805083600,
  "status": "passed"
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
formatter.scenario({
  "line": 7,
  "name": "Radio Button Demo",
  "description": "",
  "id": "testar-radiobuttonsdemo;radio-button-demo",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 6,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que estou na página Radio Buttons Demo",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "selecionar Male",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "clicar em Get Checked value",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "deverá ser apresentada a mensagem “Radio button \u0027Male\u0027 is checked”",
  "keyword": "Entao "
});
formatter.match({
  "location": "RadioButtonsDemoSteps.que_estou_na_página_Radio_Buttons_Demo()"
});
formatter.result({
  "duration": 6237154800,
  "status": "passed"
});
formatter.match({
  "location": "RadioButtonsDemoSteps.selecionar_Male()"
});
formatter.result({
  "duration": 89669400,
  "status": "passed"
});
formatter.match({
  "location": "RadioButtonsDemoSteps.clicar_em_Get_Checked_value()"
});
formatter.result({
  "duration": 102541600,
  "status": "passed"
});
formatter.match({
  "location": "RadioButtonsDemoSteps.deverá_ser_apresentada_a_mensagem_Radio_button_Male_is_checked()"
});
formatter.result({
  "duration": 5819411000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Group Radio Buttons Demo",
  "description": "",
  "id": "testar-radiobuttonsdemo;group-radio-buttons-demo",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 12,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "que estou na página Radio Buttons Demo",
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "selecionar Female",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "selecionar 5 to 15",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "CLICAR em Get values",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "deverá ser apresentada a mensagem Sex : Female Age group: 5 – 15",
  "keyword": "Entao "
});
formatter.match({
  "location": "RadioButtonsDemoSteps.que_estou_na_página_Radio_Buttons_Demo()"
});
formatter.result({
  "duration": 6468465900,
  "status": "passed"
});
formatter.match({
  "location": "RadioButtonsDemoSteps.selecionar_Female()"
});
formatter.result({
  "duration": 124000500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 11
    },
    {
      "val": "15",
      "offset": 16
    }
  ],
  "location": "RadioButtonsDemoSteps.selecionar_to(int,int)"
});
formatter.result({
  "duration": 99085700,
  "status": "passed"
});
formatter.match({
  "location": "RadioButtonsDemoSteps.clicar_em_Get_values()"
});
formatter.result({
  "duration": 138700600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 58
    },
    {
      "val": "15",
      "offset": 62
    }
  ],
  "location": "RadioButtonsDemoSteps.deverá_ser_apresentada_a_mensagem_Sex_Female_Age_group(int,int)"
});
formatter.result({
  "duration": 5829118000,
  "status": "passed"
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
  "keyword": "Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@ignore"
    }
  ]
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
  "duration": 6443226200,
  "status": "passed"
});
formatter.match({
  "location": "SelectDropdownListSteps.selecionar_Friday()"
});
formatter.result({
  "duration": 129747500,
  "status": "passed"
});
formatter.match({
  "location": "SelectDropdownListSteps.deverá_ser_apresentada_a_mensagem_Day_selected_Friday()"
});
formatter.result({
  "duration": 5849752200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Multi Select List Demo 1",
  "description": "",
  "id": "testar-selectdropdownlist;multi-select-list-demo-1",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 11,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "que estou na página Select Dropdown List",
  "keyword": "Dado "
});
formatter.step({
  "line": 14,
  "name": "selecionar New York",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "clicar em First Selected",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "deverá ser apresentada a mensagem First selected option is : New York",
  "keyword": "Entao "
});
formatter.match({
  "location": "SelectDropdownListSteps.que_estou_na_página_Select_Dropdown_List()"
});
formatter.result({
  "duration": 6536050100,
  "status": "passed"
});
formatter.match({
  "location": "SelectDropdownListSteps.selecionar_New_York()"
});
formatter.result({
  "duration": 161187800,
  "status": "passed"
});
formatter.match({
  "location": "SelectDropdownListSteps.clicar_em_First_Selected()"
});
formatter.result({
  "duration": 111141500,
  "status": "passed"
});
formatter.match({
  "location": "SelectDropdownListSteps.deverá_ser_apresentada_a_mensagem_First_selected_option_is_New_York()"
});
formatter.result({
  "duration": 5830148800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Multi Select List Demo 1",
  "description": "",
  "id": "testar-selectdropdownlist;multi-select-list-demo-1",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 18,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "que estou na página Select Dropdown List",
  "keyword": "Dado "
});
formatter.step({
  "line": 21,
  "name": "selecionar California, Ohio e Texas",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "clicar em Get All Selected",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "deverá ser apresentada a mensagem Options selected are : California,Ohio,Texas",
  "keyword": "Entao "
});
formatter.match({
  "location": "SelectDropdownListSteps.que_estou_na_página_Select_Dropdown_List()"
});
formatter.result({
  "duration": 6509130100,
  "status": "passed"
});
formatter.match({
  "location": "SelectDropdownListSteps.selecionar_California_Ohio_e_Texas()"
});
formatter.result({
  "duration": 531498200,
  "status": "passed"
});
formatter.match({
  "location": "SelectDropdownListSteps.clicar_em_Get_All_Selected()"
});
formatter.result({
  "duration": 101082000,
  "status": "passed"
});
formatter.match({
  "location": "SelectDropdownListSteps.deverá_ser_apresentada_a_mensagem_Options_selected_are_California_Ohio_Texas()"
});
formatter.result({
  "duration": 5836075200,
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
formatter.scenario({
  "line": 5,
  "name": "Single Input Field",
  "description": "",
  "id": "testando-formulário;single-input-field",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que estou na página Simple Form Demo",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "preencher o campo Enter Message com a mensagem “Treinamento Inmetrics”",
  "keyword": "Quando "
});
formatter.step({
  "line": 8,
  "name": "clicar em Show Message",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "deverá ser apresentada a mensagem Your Message: Treinamento Inmetrics",
  "keyword": "Entao "
});
formatter.match({
  "location": "SimpleFormDemoSteps.queEstouNaPáginaSimpleFormDemo()"
});
formatter.result({
  "duration": 6466682300,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoSteps.preencherOCampoEnterMessageComAMensagemTreinamentoInmetrics()"
});
formatter.result({
  "duration": 252786500,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoSteps.clicarEmShowMessage()"
});
formatter.result({
  "duration": 114680300,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoSteps.deveráSerApresentadaAMensagemYourMessageTreinamentoInmetrics()"
});
formatter.result({
  "duration": 5830370900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Two Input Fields",
  "description": "",
  "id": "testando-formulário;two-input-fields",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 11,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "que estou na página Simple Form Demo",
  "keyword": "Dado "
});
formatter.step({
  "line": 14,
  "name": "preencher o campo A com “5” e o campo B com “6”",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "clicar em Get Total",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "deverá ser apresentada a mensagem Total a + b \u003d 11",
  "keyword": "Entao "
});
formatter.match({
  "location": "SimpleFormDemoSteps.queEstouNaPáginaSimpleFormDemo()"
});
formatter.result({
  "duration": 6496070300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 25
    },
    {
      "val": "6",
      "offset": 45
    }
  ],
  "location": "SimpleFormDemoSteps.preencherOCampoAComEOCampoBCom(String,String)"
});
formatter.result({
  "duration": 273197200,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoSteps.clicarEmGetTotal()"
});
formatter.result({
  "duration": 186197200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 48
    }
  ],
  "location": "SimpleFormDemoSteps.deveráSerApresentadaAMensagemTotalAB(String)"
});
formatter.result({
  "duration": 5852875500,
  "status": "passed"
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
formatter.scenario({
  "line": 6,
  "name": "Progress Bar for Download",
  "description": "",
  "id": "bootstrap-progress-bar;progress-bar-for-download",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 5,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que estou na página Bootstrap Progress Bar",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "clicar no botão Download",
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "verificar se o progresso do download atinge \"100%\"",
  "keyword": "Então "
});
formatter.match({
  "location": "BootstrapProgressBar.queEstouNaPáginaBootstrapProgressBar()"
});
formatter.result({
  "duration": 6290544500,
  "status": "passed"
});
formatter.match({
  "location": "BootstrapProgressBar.clicarNoBotãoDownload()"
});
formatter.result({
  "duration": 169796300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100%",
      "offset": 45
    }
  ],
  "location": "BootstrapProgressBar.verificarSeOProgressoDoDownloadAtinge(String)"
});
formatter.result({
  "duration": 26313293600,
  "status": "passed"
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
formatter.scenario({
  "line": 6,
  "name": "RangeSliderCinza",
  "description": "",
  "id": "testar-range-sliders;rangeslidercinza",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que estou na pagina Range Sliders",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "mover barra da RangeSliderCinza",
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "verificar se valor da RangeSliderCinza foi alterado",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "mover barra da RangeSliderVerde",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "verificar se valor da RangeSliderVerde foi alterado",
  "keyword": "Entao "
});
formatter.step({
  "line": 12,
  "name": "mover barra da RangeSliderLaranja",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "verificar se valor da RangeSliderLaranja foi alterado",
  "keyword": "Entao "
});
formatter.match({
  "location": "RangeSlidersSteps.que_estou_na_pagina_Range_Sliders()"
});
formatter.result({
  "duration": 7435326000,
  "status": "passed"
});
formatter.match({
  "location": "RangeSlidersSteps.mover_barra_da_RangeSliderCinza()"
});
formatter.result({
  "duration": 144666500,
  "status": "passed"
});
formatter.match({
  "location": "RangeSlidersSteps.verificar_se_valor_da_RangeSliderCinza_foi_alterado()"
});
formatter.result({
  "duration": 48715100,
  "status": "passed"
});
formatter.match({
  "location": "RangeSlidersSteps.mover_barra_da_RangeSliderVerde()"
});
formatter.result({
  "duration": 133925300,
  "status": "passed"
});
formatter.match({
  "location": "RangeSlidersSteps.verificar_se_valor_da_RangeSliderVerde_foi_alterado()"
});
formatter.result({
  "duration": 58495800,
  "status": "passed"
});
formatter.match({
  "location": "RangeSlidersSteps.mover_barra_da_RangeSliderLaranja()"
});
formatter.result({
  "duration": 133586600,
  "status": "passed"
});
formatter.match({
  "location": "RangeSlidersSteps.verificar_se_valor_da_RangeSliderLaranja_foi_alterado()"
});
formatter.result({
  "duration": 5825239600,
  "status": "passed"
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
formatter.scenario({
  "line": 5,
  "name": "Table Filter Demo Grenn",
  "description": "",
  "id": "testar-table-filter-demo;table-filter-demo-grenn",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que estou na Table Filter Demo",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "Clicar em Green",
  "keyword": "Quando "
});
formatter.step({
  "line": 8,
  "name": "verificar se elementos Green foram filtrados",
  "keyword": "Entao "
});
formatter.step({
  "line": 9,
  "name": "Clicar em Orange",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "verificar se elementos Orange foram filtrados",
  "keyword": "Entao "
});
formatter.step({
  "line": 11,
  "name": "Clicar em Red",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "ferificar se elementos Red foram filtrados",
  "keyword": "Entao "
});
formatter.step({
  "line": 13,
  "name": "Clicar em All",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "ferificar se elementos aparecem todos elementos",
  "keyword": "Entao "
});
formatter.match({
  "location": "FilterTableSteps.que_estou_na_Table_Filter_Demo()"
});
formatter.result({
  "duration": 7651608400,
  "status": "passed"
});
formatter.match({
  "location": "FilterTableSteps.clicar_em_Green()"
});
formatter.result({
  "duration": 166545500,
  "status": "passed"
});
formatter.match({
  "location": "FilterTableSteps.verificar_se_elementos_Green_foram_filtrados()"
});
formatter.result({
  "duration": 71747500,
  "status": "passed"
});
formatter.match({
  "location": "FilterTableSteps.clicar_em_Orange()"
});
formatter.result({
  "duration": 189505200,
  "status": "passed"
});
formatter.match({
  "location": "FilterTableSteps.verificar_se_elementos_Orange_foram_filtrados()"
});
formatter.result({
  "duration": 74121400,
  "status": "passed"
});
formatter.match({
  "location": "FilterTableSteps.clicar_em_Red()"
});
formatter.result({
  "duration": 162472900,
  "status": "passed"
});
formatter.match({
  "location": "FilterTableSteps.ferificar_se_elementos_Red_foram_filtrados()"
});
formatter.result({
  "duration": 87778100,
  "status": "passed"
});
formatter.match({
  "location": "FilterTableSteps.clicar_em_All()"
});
formatter.result({
  "duration": 128760000,
  "status": "passed"
});
formatter.match({
  "location": "FilterTableSteps.ferificar_se_elementos_aparecem_todos_elementos()"
});
formatter.result({
  "duration": 5830048300,
  "status": "passed"
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
formatter.scenario({
  "line": 6,
  "name": "Tasks - Válida",
  "description": "",
  "id": "testando-tables;tasks---válida",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 5,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que estou na página Table Data Search",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "pesquisar por \"Bug\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "a tebela deverá exibir apenas a Task \"Bug fixing\"",
  "keyword": "Então "
});
formatter.match({
  "location": "TableDataSearchSteps.queEstouNaPáginaTableDataSearch()"
});
formatter.result({
  "duration": 6476504400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bug",
      "offset": 15
    }
  ],
  "location": "TableDataSearchSteps.pesquisarPor(String)"
});
formatter.result({
  "duration": 129374500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bug fixing",
      "offset": 38
    }
  ],
  "location": "TableDataSearchSteps.aTebelaDeveráExibirApenasATask(String)"
});
formatter.result({
  "duration": 5860507800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Tasks - Inválida",
  "description": "",
  "id": "testando-tables;tasks---inválida",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 11,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "que estou na página Table Data Search",
  "keyword": "Dado "
});
formatter.step({
  "line": 14,
  "name": "pesquisar por \"qwert\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "a tebela deverá exibir apenas a Task \"No results found\"",
  "keyword": "Então "
});
formatter.match({
  "location": "TableDataSearchSteps.queEstouNaPáginaTableDataSearch()"
});
formatter.result({
  "duration": 6291702000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwert",
      "offset": 15
    }
  ],
  "location": "TableDataSearchSteps.pesquisarPor(String)"
});
formatter.result({
  "duration": 242446600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No results found",
      "offset": 38
    }
  ],
  "location": "TableDataSearchSteps.aTebelaDeveráExibirApenasATask(String)"
});
formatter.result({
  "duration": 5846375100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Listed Users",
  "description": "",
  "id": "testando-tables;listed-users",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 17,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "que estou na página Table Data Search",
  "keyword": "Dado "
});
formatter.step({
  "line": 20,
  "name": "clicar no botão filter",
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "verificar se os campos \"#\" \"Username\" \"First Name\" \"Last Name\" estão ativados",
  "keyword": "Então "
});
formatter.match({
  "location": "TableDataSearchSteps.queEstouNaPáginaTableDataSearch()"
});
formatter.result({
  "duration": 6352351500,
  "status": "passed"
});
formatter.match({
  "location": "TableDataSearchSteps.clicarNoBotãoFilter()"
});
formatter.result({
  "duration": 165610500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#",
      "offset": 24
    },
    {
      "val": "Username",
      "offset": 28
    },
    {
      "val": "First Name",
      "offset": 39
    },
    {
      "val": "Last Name",
      "offset": 52
    }
  ],
  "location": "TableDataSearchSteps.verificarSeOsCamposEstãoAtivados(String,String,String,String)"
});
formatter.result({
  "duration": 6004697000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Listed Users - Pesquisar",
  "description": "",
  "id": "testando-tables;listed-users---pesquisar",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 23,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "que estou na página Table Data Search",
  "keyword": "Dado "
});
formatter.step({
  "line": 26,
  "name": "clicar no botão filter",
  "keyword": "Quando "
});
formatter.step({
  "line": 27,
  "name": "pesquisar pelo username \"jacobs\"",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "a tabela deverá exibir apenas o usuário \"jacobs\"",
  "keyword": "Então "
});
formatter.match({
  "location": "TableDataSearchSteps.queEstouNaPáginaTableDataSearch()"
});
formatter.result({
  "duration": 6311354300,
  "status": "passed"
});
formatter.match({
  "location": "TableDataSearchSteps.clicarNoBotãoFilter()"
});
formatter.result({
  "duration": 109934900,
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
  "duration": 207555700,
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
  "duration": 57961200,
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
formatter.scenario({
  "line": 6,
  "name": "Pesquisar por campo texto",
  "description": "",
  "id": "testar-tables;pesquisar-por-campo-texto",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que estou na página Table Sort And Search",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "digitar no campo de texto \"A Cox\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "deverá ser apresentado \"A. Cox\" no campo \"Name\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "TableSortAndSearchSteps.que_estou_na_página_Table_Sort_And_Search()"
});
formatter.result({
  "duration": 6674829300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A Cox",
      "offset": 27
    }
  ],
  "location": "TableSortAndSearchSteps.digitar_no_campo_de_texto_para_exibir(String)"
});
formatter.result({
  "duration": 428381200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A. Cox",
      "offset": 24
    },
    {
      "val": "Name",
      "offset": 42
    }
  ],
  "location": "TableSortAndSearchSteps.deverá_ser_apresentado_no_campo(String,String)"
});
formatter.result({
  "duration": 6032728600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Pesquisar por Categorias",
  "description": "",
  "id": "testar-tables;pesquisar-por-categorias",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 11,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "que estou na página Table Sort And Search",
  "keyword": "Dado "
});
formatter.step({
  "line": 14,
  "name": "mudar ordem do campo \"Name\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "deverá ser apresentado no campo \"Name\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "TableSortAndSearchSteps.que_estou_na_página_Table_Sort_And_Search()"
});
formatter.result({
  "duration": 6571266600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name",
      "offset": 22
    }
  ],
  "location": "TableSortAndSearchSteps.clicar_no_campo_exibir_em_ordem(String)"
});
formatter.result({
  "duration": 120776600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name",
      "offset": 33
    }
  ],
  "location": "TableSortAndSearchSteps.deverá_ser_apresentado_nome_em_ordem_decrescente(String)"
});
formatter.result({
  "duration": 5960916800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Apresentar N dados",
  "description": "",
  "id": "testar-tables;apresentar-n-dados",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 17,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "que estou na página Table Sort And Search",
  "keyword": "Dado "
});
formatter.step({
  "line": 20,
  "name": "clicar no campo List",
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "selecionar \"25\" quantidade",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "deverá ser apresentado 25 quantidades",
  "keyword": "Entao "
});
formatter.match({
  "location": "TableSortAndSearchSteps.que_estou_na_página_Table_Sort_And_Search()"
});
formatter.result({
  "duration": 6764741100,
  "status": "passed"
});
formatter.match({
  "location": "TableSortAndSearchSteps.clicar_no_campo_List()"
});
formatter.result({
  "duration": 228929700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 12
    }
  ],
  "location": "TableSortAndSearchSteps.selecionar_quantidade(String)"
});
formatter.result({
  "duration": 93963900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 23
    }
  ],
  "location": "TableSortAndSearchSteps.deverá_ser_apresentado_quantidades(int)"
});
formatter.result({
  "duration": 5859202700,
  "status": "passed"
});
});