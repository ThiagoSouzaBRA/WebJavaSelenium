package br.inmetrics.steps.alertsandmodals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import junit.framework.Assert;

public class JavascriptAlertsSteps {

	WebDriver driver;
	
	@Dado("^que estou na página Javascript Alerts$")
	public void queEstouNaPáginaJavascriptAlerts() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\ChromeDriver\\chromedriver.exe"); //Localização do driver
		driver = new ChromeDriver(); //Instancia WebDriver
		driver.get("https://www.seleniumeasy.com/test/javascript-alert-box-demo.html"); //Iniciar navegador no link X
		
		Assert.assertTrue(driver.findElement(By.xpath("//div[text()='Java Script Alert Box'][1]")).isDisplayed());
	}

	@Quando("^clicar no botão click me do Java Script Confirm Box$")
	public void clicarNoBotãoClickMeDoJavaScriptConfirmBox() throws Throwable {
	    driver.findElement(By.xpath("//button[@onclick='myConfirmFunction()']")).click();
	}

	@Quando("^clicar em \"([^\"]*)\" no alerta$")
	public void clicarEmNoAlerta(String arg1) throws Throwable {
	    if(arg1.contentEquals("OK")) {
	    	driver.switchTo().alert().accept();
	    }else if(arg1.equals("Cancelar")) {
	    	driver.switchTo().alert().dismiss();
	    }
	}

	@Então("^deverá ser exibida a mensagem \"([^\"]*)\"$")
	public void deveráSerExibidaAMensagem(String arg1) throws Throwable {
		String msg = driver.findElement(By.xpath("//p[@id='confirm-demo']")).getText();
	    Assert.assertEquals(arg1, msg);
	}
	
	@Quando("^clicar no botão click for prompt box$")
	public void clicarNoBotãoClickForPromptBox() throws Throwable {
	    driver.findElement(By.xpath("//button[@onclick='myPromptFunction()']")).click();
	}

	@Quando("^preencher o textbox do alerta com \"([^\"]*)\"$")
	public void preencherOTextboxDoAlertaCom(String arg1) throws Throwable {
	    driver.switchTo().alert().sendKeys(arg1);
	}

	@Então("^deverá ser exibida mensagem \"([^\"]*)\"$")
	public void deveráSerExibidaMensagem(String arg1) throws Throwable {
	    String msg = driver.findElement(By.xpath("//p[@id='prompt-demo']")).getText();
	    Assert.assertEquals(arg1, msg);
	}
}
