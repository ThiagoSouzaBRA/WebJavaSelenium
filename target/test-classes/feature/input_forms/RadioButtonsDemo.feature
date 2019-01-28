#language: pt


Funcionalidade: Testar RadioButtonsDemo

Cenario: Radio Button Demo
         Dado que estou na página Radio Buttons Demo
         Quando selecionar Male
         E clicar em Get Checked value
         Entao deverá ser apresentada a mensagem “Radio button 'Male' is checked”

Cenario: Group Radio Buttons Demo
         Dado que estou na página Radio Buttons Demo
         Quando selecionar Female 
         E selecionar 5 to 15
         E CLICAR em Get values
         Entao deverá ser apresentada a mensagem Sex : Female Age group: 5 – 15

