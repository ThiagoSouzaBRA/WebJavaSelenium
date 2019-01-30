package br.inmetrics.steps.datapickers;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class BootStrapDateSteps {
	
	WebDriver driver;
	
	@Dado("^que estou na página Bootstrap Date Pickers$")
	public void que_estou_na_página_Bootstrap_Date_Pickers() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\ChromeDriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html");
	    
		if(driver.findElement(By.xpath("//h1[text()='Bootstrap Date Pickers Example']")) == null){
			Assert.assertTrue(false);
		}
	}

	@Quando("^selecionar a box data$")
	public void selecionar_a_box_data() throws Throwable {
		driver.findElement(By.xpath("//input[@class='form-control']")).click();
	}

	@Quando("^selecionar ano seguinte com base no atual ano$")
	public void selecionar_ano_seguinte_com_base_no_atual_ano() throws Throwable {
		
		int ano = 2019;
		int proximoano = ano + 1;
		
		driver.findElement(By.xpath("//th[@class='datepicker-switch']")).click(); // ir para seleção de ano
		driver.findElement(By.xpath("//th[text()='" + ano + "']")).click(); //ir para seleção de ano
		driver.findElement(By.xpath("//span[text()='" + proximoano + "']")).click(); // selecionar proximo ano
		
		 
		 
	}

	@Entao("^deverá ser nulo o campo de data$")
	public void deverá_ser_nulo_o_campo_de_data() throws Throwable {
		if(driver.findElement(By.xpath("//*[@id=\"sandbox-container1\"]/div/input")).getAttribute("value") != null){
			Assert.assertTrue(false);
		}
		Thread.currentThread().sleep(5000);
		driver.quit();
	}
	

	@Quando("^selecionar algum dia que esteja na coluna sabado$")
	public void selecionar_algum_dia_que_esteja_na_coluna_sabado() throws Throwable {
	    int dia = 20;
	   driver.findElement(By.xpath("//td[text()='" + dia + "'][//td[@class='disabled disabled-date day']]")).click();
	}

	@Quando("^clicar em Today$")
	public void clicar_em_Today() throws Throwable {
		driver.findElement(By.xpath("//th[text()='Today']")).click();
		
	}

	@Entao("^deverá ser alterado o campo de data para a data atual$")
	public void deverá_ser_alterado_o_campo_de_data_para_a_data_atual() throws Throwable {
		
		SimpleDateFormat data = new SimpleDateFormat("dd/MM/yyyy");  
		   
		String dataAtual = data.format(new Date());
		
		String dataBox = driver.findElement(By.xpath("//input[@class='form-control'][1]")).getAttribute("value");
		
		Assert.assertEquals(dataAtual, dataBox);
		
		Thread.currentThread().sleep(5000);
		driver.quit();
	}

	@Quando("^clicar em Clear$")
	public void clicar_em_Clear() throws Throwable {
		
		driver.findElement(By.xpath("//th[text()='Clear']")).click();
	}

	@Quando("^selecionar a box data range$")
	public void selecionar_a_box_data_range() throws Throwable {
		
		driver.findElement(By.xpath("//input[@placeholder='Start date']")).click();
	}

	@Quando("^selecionar alguma data que esteja na coluna domingo$")
	public void selecionar_alguma_data_que_esteja_na_coluna_domingo() throws Throwable {
		int data = 30;
		driver.findElement(By.xpath("//td[@class='old disabled disabled-date day'][//td[text()='" + data + "']]")).click();
	}

	@Entao("^campo box data range não deverá ser alterado$")
	public void campo_box_data_range_não_deverá_ser_alterado() throws Throwable {
		
		Assert.assertTrue(driver.findElement(By.xpath("//input[@placeholder='Start date']")).getAttribute("value").isEmpty());
		
		Thread.currentThread().sleep(5000);
		driver.quit();
		
	}

	@Quando("^selecionar alguma data$")
	public void selecionar_alguma_data() throws Throwable {
		
		driver.findElement(By.xpath("//td[@class='day'][2]")).click();
		
	}

	@Entao("^campo box data range da direita deverá ser igual ao box data range da esquerda$")
	public void campo_box_data_range_da_direita_deverá_ser_igual_ao_box_data_range_da_esquerda() throws Throwable {
	    String boxprim = driver.findElement(By.xpath("//input[@placeholder='Start date']")).getAttribute("value");
	    String boxsecun = driver.findElement(By.xpath("//input[@placeholder='End date']")).getAttribute("value");
	    
	    Assert.assertEquals(boxprim, boxsecun);
	    
	    Thread.currentThread().sleep(5000);
		driver.quit();
	}

}
