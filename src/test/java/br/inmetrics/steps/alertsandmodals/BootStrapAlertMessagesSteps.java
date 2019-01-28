package br.inmetrics.steps.alertsandmodals;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class BootStrapAlertMessagesSteps {
	
	WebDriver driver;
	
	@Dado("^que estou na página Bootstrap Alert messages$")
	public void que_estou_na_página_Bootstrap_Alert_messages() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\ChromeDriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.seleniumeasy.com/test/bootstrap-alert-messages-demo.html");
	    
		if(driver.findElement(By.xpath("//h2[text()='Bootstrap Alert messages']")) == null){
			Assert.assertTrue(false);
		}
	}

	@Quando("^clicar em todos os alertas$")
	public void clicar_em_todos_os_alertas() throws Throwable {
		int qtd = driver.findElements(By.xpath("//button[contains(@class, 'btn')]")).size();
		for(int i=1; i <= qtd; i++){
			driver.findElement(By.xpath("//div[@class='col-md-4']//button["+i+"]")).click();;
		}
		
		
		
	}

	@Entao("^mostrar todos os alertas$")
	public void mostrar_todos_os_alertas() throws Throwable {
		int qtd = driver.findElements(By.xpath("//button[contains(@class, 'alert')]")).size();
		for(int i=1; i <= qtd; i++){
			if(!(driver.findElement(By.xpath("//div[contains(@class, 'alert')]["+i+"]")).isDisplayed())){
				Assert.assertTrue(false);
			}
		}
	}

	@Quando("^clicar em alerta com classificação \"([^\"]*)\"$")
	public void clicar_em_alerta_com_classificação(String arg1) throws Throwable {
		
		int qtd = driver.findElements(By.xpath("//button[contains(@class, '" + arg1 + "')]")).size();
		System.out.println(qtd);
		for(int i=1; i <= qtd; i++){
			driver.findElement(By.xpath("//button[contains(@class, '" + arg1 + "')]["+i+"]")).click();;
		}
	}

}
