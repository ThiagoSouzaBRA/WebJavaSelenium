package br.inmetrics.steps.inputforms;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;


public class RadioButtonsDemoSteps {

	WebDriver driver;
	
	@Dado("^que estou na página Radio Buttons Demo$")
	public void que_estou_na_página_Radio_Buttons_Demo() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\ChromeDriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.seleniumeasy.com/test/basic-radiobutton-demo.html");
	    
		if(driver.findElement(By.xpath("//h3[text()='This is again simple example to start working with radio buttons using Selenium.']")) == null){
			Assert.assertTrue(false);
		}
	}

	@Quando("^selecionar Male$")
	public void selecionar_Male() throws Throwable {
	    driver.findElement(By.xpath("//input[@value='Male']")).click();	    
	}

	@Quando("^clicar em Get Checked value$")
	public void clicar_em_Get_Checked_value() throws Throwable {
		
		driver.findElement(By.xpath("//button[@id='buttoncheck']")).click();	
	    
	}

	@Entao("^deverá ser apresentada a mensagem “Radio button 'Male' is checked”$")
	public void deverá_ser_apresentada_a_mensagem_Radio_button_Male_is_checked() throws Throwable {
	    
		String valor = driver.findElement(By.xpath("//p[@class='radiobutton']")).getText();
		
		Assert.assertEquals("Radio button 'Male' is checked", valor);
		
		Thread.currentThread().sleep(5000);
		driver.quit();
	}
	
	@Quando("^selecionar Female$")
	public void selecionar_Female() throws Throwable {
	
		driver.findElement(By.xpath("//input[@name='gender'][@value='Female']")).click();	

	}

	@Quando("^selecionar (\\d+) to (\\d+)$")
	public void selecionar_to(int arg1, int arg2) throws Throwable {

		String encontrar = arg1 + " - " + arg2;
		
		driver.findElement(By.xpath("//input[@value='" + encontrar + "']")).click();
		
		
		
	}

	@Quando("^CLICAR em Get values$")
	public void clicar_em_Get_values() throws Throwable {
	    
		driver.findElement(By.xpath("//button[text()='Get values']")).click();	
	    
	}

	@Entao("^deverá ser apresentada a mensagem Sex : Female Age group: (\\d+) – (\\d+)$")
	public void deverá_ser_apresentada_a_mensagem_Sex_Female_Age_group(int arg1, int arg2) throws Throwable {
				
		String encontrar = "Sex : Female\nAge group: " + arg1 + " - " + arg2;
		
		String valor = driver.findElement(By.xpath("//p[@class='groupradiobutton']")).getText();
		
		Assert.assertEquals(encontrar, valor);
	    
		Thread.currentThread().sleep(5000);
		driver.quit();
	}

	
}
