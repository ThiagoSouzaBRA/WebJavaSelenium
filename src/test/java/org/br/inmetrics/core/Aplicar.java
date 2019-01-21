package org.br.inmetrics.core;

import cucumber.api.SnippetType;
import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
             features = "src/test/resources/Features/",
             glue = "org.br.inmetrics.steps",
             tags = {"@5"}, // para ignorar basta colocar o ~@cenario, multi tag "@conta, @aprender"
             //plugin = {"pretty", "html:target/report-html", "json:target/report.json"}, // exibir as features no console
             monochrome = true,
             snippets = SnippetType.CAMELCASE, // coloca os metodos concatenados 
             dryRun = false,  // valida a estrutura dos testes
             strict = false // caso nao encontre um teste, da erro no teste
             )


public class Aplicar {
	

}
