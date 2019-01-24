package br.inmetrics.steps.inputforms;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class CheckboxDemoSteps {

	WebDriver driver;
	
	@Dado("^que estou na página Checkbox Demo$")
	public void queEstouNaPáginaCheckboxDemo() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\ChromeDriver\\chromedriver.exe"); //Localização do driver
		driver = new ChromeDriver(); //Instancia WebDriver
		driver.get("https://srbarriga.herokuapp.com"); //Iniciar navegador no link X
	}
	
	@Quando("^clicar em Click on this check box$")
	public void clicarEmClickOnThisCheckBox() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Entao("^deverá ser apresentada a mensagem Success - Check box is checked$")
	public void deveráSerApresentadaAMensagemSuccessCheckBoxIsChecked() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Quando("^clicar no botão Check All$")
	public void clicarNoBotãoCheckAll() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Entao("^verificar se todos os checkbox’s foram marcados$")
	public void verificarSeTodosOsCheckboxSForamMarcados() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Quando("^clicar no botão Uncheck All$")
	public void clicarNoBotãoUncheckAll() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Entao("^verificar se todos os checkbox’s foram desmarcados$")
	public void verificarSeTodosOsCheckboxSForamDesmarcados() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
}
