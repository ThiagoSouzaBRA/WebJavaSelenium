package br.inmetrics.steps.table;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class FilterTableSteps {
	
	WebDriver driver;
	
	@Dado("^que estou na Table Filter Demo$")
	public void que_estou_na_Table_Filter_Demo() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\chromedriver\\chromedriver.exe");
    	driver = new ChromeDriver();
    	driver.get("https://www.seleniumeasy.com/test/table-records-filter-demo.html");
    	driver.manage().window().maximize();
		
		String mensagem = driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/h2")).getText();
	    Assert.assertEquals("Table Filter Demo", mensagem);
	}

	@Quando("^Clicar em Green$")
	public void clicar_em_Green() throws Throwable {
		driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/section/div/div/div[2]/div[1]/div/button[1]")).click();
	}

	@Entao("^verificar se elementos Green foram filtrados$")
	public void verificar_se_elementos_Green_foram_filtrados() throws Throwable {
		String mensagem = driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/section/div/div/div[2]/div[2]/table/tbody/tr[1]/td[3]/div/div/h4/span")).getText();
	    Assert.assertEquals("(Green)", mensagem);
	}

	@Quando("^Clicar em Orange$")
	public void clicar_em_Orange() throws Throwable {
		driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/section/div/div/div[2]/div[1]/div/button[2]")).click();
	}

	@Entao("^verificar se elementos Orange foram filtrados$")
	public void verificar_se_elementos_Orange_foram_filtrados() throws Throwable {
	    String mensagem = driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/section/div/div/div[2]/div[2]/table/tbody/tr[2]/td[3]/div/div/h4/span")).getText();
	    Assert.assertEquals("(Orange)", mensagem);
	}

	@Quando("^Clicar em Red$")
	public void clicar_em_Red() throws Throwable {
	    driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/section/div/div/div[2]/div[1]/div/button[3]")).click();
	   
	}

	@Entao("^ferificar se elementos Red foram filtrados$")
	public void ferificar_se_elementos_Red_foram_filtrados() throws Throwable {
		
		String mensagem = driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/section/div/div/div[2]/div[2]/table/tbody/tr[3]/td[3]/div/div/h4/span")).getText();
		Assert.assertEquals("(Red)",mensagem);
	    
	}
	
	@Quando("^Clicar em All$")
	public void clicar_em_All() throws Throwable {
		
		driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/section/div/div/div[2]/div[1]/div/button[4]")).click();
		


	}

	@Entao("^ferificar se elementos aparecem todos elementos$")
	public void ferificar_se_elementos_aparecem_todos_elementos() throws Throwable {
		
		String green = driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/section/div/div/div[2]/div[2]/table/tbody/tr[1]/td[3]/div/div/h4/span")).getText();
	    Assert.assertEquals("(Green)", green);
	    
	    driver.quit();
	       
	  
	    
	}
	
	 //public void tearDown(){
      // driver.quit();
    }
	 


