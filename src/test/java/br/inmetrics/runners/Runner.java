package br.inmetrics.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class) //Definir para o JUnit rodar com Cucumber
@CucumberOptions(
<<<<<<< HEAD
		features = "src/test/resources/feature/", //Local onde est� salva as features
		glue = "br.inmetrics.steps.inputforms", //Pacote onde est� salvo os steps
=======
		features = "src/test/resources/feature", //Local onde est� salva as features
		glue = "br.inmetrics.steps", //Pacote onde est� salvo os steps
>>>>>>> 0f24e92f2a1387b82fd0f389a1d0a73afacf2b03
		tags = {"~@ignore"}, //Nome da tag que quero executar (As tags ficam localizadas nas features)
		plugin = {"pretty", "html:target/report-html"}, //Ativar para gerar relat�rio. PRETTY: relat�rio no console. HTML: gera relat�rio HTML
		monochrome = true, //Remover caracteres especiais do console
		snippets = SnippetType.CAMELCASE, //Gerar nomes dos m�todos em camelcase
		dryRun = false, //TRUE: N�o executa os teste, apenas valida se o mapeamento dos steps est�o corretos. FALSE: (PADR�O) Executa os testes
		strict = false //TRUE: N�o passa no teste se faltar implementar um step. FALSE: (PADR�O) Passa nos testes, porem avisa que um step est� indefinido
		) 

public class Runner {
	
}
