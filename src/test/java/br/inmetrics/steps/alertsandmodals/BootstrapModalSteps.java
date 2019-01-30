package br.inmetrics.steps.alertsandmodals;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class BootstrapModalSteps {

	WebDriver driver;
	
	@Dado("^que estou na página Bootstrap Modal Example for Automation$")
	public void que_estou_na_página_Bootstrap_Modal_Example_for_Automation() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\ChromeDriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.seleniumeasy.com/test/bootstrap-modal-demo.html");
		
		if(driver.findElement(By.xpath("//h2[text()='Bootstrap Modal Example for Automation']")) == null){
			Assert.assertTrue(false);
		}
		
	}
	
	@Quando("^clicar em Launch Modal dentro de Single Modal Example$")
	public void clicar_em_Launch_Modal_dentro_de_Single_Modal_Example() throws Throwable {
	    driver.findElement(By.xpath("//a[@class='btn btn-primary']")).click();
	}
	
	@Quando("^visualizar a aba Modal Title$")
	public void visualizar_a_aba_Modal_Title() throws Throwable {
		if(driver.findElement(By.xpath("//h4[@class='modal-title'][//h4[text()='Modal Title']]")) == null){
			Assert.assertTrue(false);
		}
	}
	
	@Quando("^enter no botão Save Changes First$")
	public void clicar_no_botão_Save_Changes() throws Throwable {
		driver.findElement(By.xpath("(//a[text()='Save changes'])[1]")).sendKeys(Keys.ENTER);
	}
	
	@Entao("^fechar aba Modal Title$")
	public void fechar_aba_Modal_Title() throws Throwable {
	    if(driver.findElement(By.xpath("//*[@id=\"myModal0\"]/div/div/div[1]/h4")).isDisplayed()){
	    	Assert.assertTrue(false);
	    }
	    Thread.currentThread().sleep(5000);
		driver.quit();
	}
	
	@Quando("^clicar em Launch Modal dentro de Multiple Modal Example$")
	public void clicar_em_Launch_Modal_dentro_de_Multiple_Modal_Example() throws Throwable {
		driver.findElement(By.xpath("(//a[text()='Launch modal'])[2]")).click();
	}
	
	@Quando("^visualizar a aba First Modal$")
	public void visualizar_a_aba_First_Modal() throws Throwable {
		if(driver.findElement(By.xpath("//h4[text()='First Modal']")) == null){
			Assert.assertTrue(false);
		}
	}
	
	@Quando("^enter no botão Save Changes do First Modal$")
	public void clicar_no_botão_Save_Changes_do_First_Modal() throws Throwable {
		driver.findElement(By.xpath("(//a[text()='Save changes'])[2]")).sendKeys(Keys.ENTER);
	}
	
	@Entao("^fechar aba First Modal$")
	public void fechar_aba_First_Modal() throws Throwable {

		if(driver.findElement(By.xpath("//h4[text()='First Modal']")).isDisplayed()){
			Assert.assertTrue(false);
		}
		Thread.currentThread().sleep(5000);
		driver.quit();
	}
	
	@Quando("^clicar no botão Launch Modal$")
	public void clicar_no_botão_Launch_Modal() throws Throwable {
		driver.findElement(By.xpath("(//a[text()='Launch modal'])[3]")).sendKeys(Keys.ENTER);
	}
	
	@Quando("^visualizar a aba Modal (\\d+)$")
	public void visualizar_a_aba_Modal(int arg1) throws Throwable {
		if(driver.findElement(By.xpath("//h4[text()='Modal 2']")) == null){
			Assert.assertTrue(false);
		}
	}
	
	@Quando("^enter no botão close$")
	public void clicarNoBotãoSaveChanges() throws Throwable {
		driver.findElement(By.xpath("(//a[text()='Close'])[2]")).sendKeys(Keys.ENTER);
	   
	}
	
	@Quando("^fechar aba First Modal (\\d+)$")
	public void fechar_aba_First_Modal_2(int arg1) throws Throwable {
		
		driver.findElement(By.xpath("(//a[text()='Close'])[3]")).sendKeys(Keys.ENTER);
		
	}

}
