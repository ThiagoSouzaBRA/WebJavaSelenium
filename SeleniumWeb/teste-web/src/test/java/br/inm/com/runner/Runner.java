package br.inm.com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(
	features = "src/test/resources/features/",
	glue = "br.inm.com.steps",
	tags = {"@InputForms"},
	plugin = {"pretty", "html:target/report-html"},
	monochrome = true,
	snippets = SnippetType.CAMELCASE,
	dryRun = false,
	strict = false
)
public class Runner {

}
