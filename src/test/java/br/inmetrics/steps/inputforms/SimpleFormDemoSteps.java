package br.inmetrics.steps.inputforms;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import junit.framework.Assert;

public class SimpleFormDemoSteps {
	
	WebDriver driver;

	@Dado("^que estou na página Simple Form Demo$")
	public void queEstouNaPáginaSimpleFormDemo() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\ChromeDriver\\chromedriver.exe"); //Localização do driver
		driver = new ChromeDriver(); //Instancia WebDriver
		driver.get("https://www.seleniumeasy.com/test/basic-first-form-demo.html"); //Iniciar navegador no link X
	}

	@Quando("^preencher o campo Enter Message com a mensagem “Treinamento Inmetrics”$")
	public void preencherOCampoEnterMessageComAMensagemTreinamentoInmetrics() throws Throwable {
	    driver.findElement(By.id("user-message")).sendKeys("Treinamento Inmetrics");
	}

	@Quando("^clicar em Show Message$")
	public void clicarEmShowMessage() throws Throwable {
	    driver.findElement(By.xpath("//*[@id=\"get-input\"]/button")).click();
	}

	@Entao("^deverá ser apresentada a mensagem Your Message: Treinamento Inmetrics$")
	public void deveráSerApresentadaAMensagemYourMessageTreinamentoInmetrics() throws Throwable {
	    String msg = driver.findElement(By.id("display")).getText();
	    Assert.assertEquals("Treinamento Inmetrics", msg);
	}

	@Quando("^preencher o campo A com “(\\d+)” e o campo B com “(\\d+)”$")
	public void preencherOCampoAComEOCampoBCom(String arg1, String arg2) throws Throwable {
	    driver.findElement(By.id("sum1")).sendKeys(arg1);
	    driver.findElement(By.id("sum2")).sendKeys(arg2);
	}

	@Quando("^clicar em Get Total$")
	public void clicarEmGetTotal() throws Throwable {
	    driver.findElement(By.xpath("//*[@id=\"gettotal\"]/button")).click();
	}

	@Entao("^deverá ser apresentada a mensagem Total a \\+ b = (\\d+)$")
	public void deveráSerApresentadaAMensagemTotalAB(String arg1) throws Throwable {
	    String total = driver.findElement(By.id("displayvalue")).getText();
	    Assert.assertEquals(arg1, total);
	}
}
