#language: pt

Funcionalidade: Testar SelectDropdownList
@ignore
Cenario: Select List Demo
         Dado que estou na página Select Dropdown List
         Quando selecionar Friday
         Entao deverá ser apresentada a mensagem Day selected :- Friday

@ignore
Cenario: Multi Select List Demo 1
         Dado que estou na página Select Dropdown List
         Quando selecionar New York
         E clicar em First Selected
         Entao deverá ser apresentada a mensagem First selected option is : New York
@ignore
Cenario: Multi Select List Demo 1
        Dado que estou na página Select Dropdown List
        Quando selecionar California, Ohio e Texas
        E clicar em Get All Selected
        Entao deverá ser apresentada a mensagem Options selected are : California,Ohio,Texas
