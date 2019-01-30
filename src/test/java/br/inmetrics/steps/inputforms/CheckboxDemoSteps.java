package br.inmetrics.steps.inputforms;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import junit.framework.Assert;

public class CheckboxDemoSteps {

	WebDriver driver;
	
	@Dado("^que estou na página Checkbox Demo$")
	public void queEstouNaPáginaCheckboxDemo() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\ChromeDriver\\chromedriver.exe"); //Localização do driver
		driver = new ChromeDriver(); //Instancia WebDriver
		driver.get("https://www.seleniumeasy.com/test/basic-checkbox-demo.html"); //Iniciar navegador no link X
	}
	
	@Quando("^clicar em Click on this check box$")
	public void clicarEmClickOnThisCheckBox() throws Throwable {
	    driver.findElement(By.id("isAgeSelected")).click();
	}

	@Entao("^deverá ser apresentada a mensagem Success - Check box is checked$")
	public void deveráSerApresentadaAMensagemSuccessCheckBoxIsChecked() throws Throwable {
	    String msg = driver.findElement(By.id("txtAge")).getText();
	    Assert.assertEquals("Success - Check box is checked", msg);
	    
	    Thread.currentThread().sleep(5000);
		driver.quit();
	}

	@Quando("^clicar no botão Check All$")
	public void clicarNoBotãoCheckAll() throws Throwable {
	    driver.findElement(By.id("check1")).click();
	}

	@Quando("^marcar todos os checkbox$")
	public void marcarTodosOsCheckbox() throws Throwable {
	    driver.findElement(By.xpath("//label[text()='Option 1']")).click();
	    driver.findElement(By.xpath("//label[text()='Option 2']")).click();
	    driver.findElement(By.xpath("//label[text()='Option 3']")).click();
	    driver.findElement(By.xpath("//label[text()='Option 4']")).click();
	}

	@Entao("^verificar se o botão apresenta a mensagem Uncheck All$")
	public void verificarSeOBotãoApresentaAMensagemUncheckAll() throws Throwable {
	    String msgBtn = driver.findElement(By.id("check1")).getAttribute("value");
	    Assert.assertEquals("Uncheck All", msgBtn);
	    
	    Thread.currentThread().sleep(5000);
		driver.quit();
	}
}
