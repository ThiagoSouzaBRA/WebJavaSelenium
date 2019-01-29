#language: pt

Funcionalidade: Testar Bootstrap Modal

@ignore
Cenario: Modal Unico - Salvar Mudanças
         Dado que estou na página Bootstrap Modal Example for Automation
         Quando clicar em Launch Modal dentro de Single Modal Example
         E visualizar a aba Modal Title
         E enter no botão Save Changes First
         Entao fechar aba Modal Title

@ignore   
Cenario: Modal Multiplo - Salvar Modal
         Dado que estou na página Bootstrap Modal Example for Automation
         Quando clicar em Launch Modal dentro de Multiple Modal Example
         E visualizar a aba First Modal
         E enter no botão Save Changes do First Modal
         Entao fechar aba First Modal

@ignore     
Cenario: Modal Multiplo - Salvar Segundo Modal
         Dado que estou na página Bootstrap Modal Example for Automation
         Quando clicar em Launch Modal dentro de Multiple Modal Example
         E visualizar a aba First Modal
         E clicar no botão Launch Modal
         E visualizar a aba Modal 2
         E enter no botão close 
         Entao fechar aba First Modal 2
         
