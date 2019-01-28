package br.inmetrics.steps.inputforms;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class SelectDropdownListSteps {

	WebDriver driver;
	
	@Dado("^que estou na página Select Dropdown List$")
	public void que_estou_na_página_Select_Dropdown_List() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\ChromeDriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html");
	}

	@Quando("^selecionar Friday$")
	public void selecionar_Friday() throws Throwable {
		
		driver.findElement(By.xpath("//option[@value='Friday']")).click();
	    
	}

	@Entao("^deverá ser apresentada a mensagem Day selected :- Friday$")
	public void deverá_ser_apresentada_a_mensagem_Day_selected_Friday() throws Throwable {
	   
	   String comparar = "Day selected :- Friday";
	   String encontrar = driver.findElement(By.xpath("//p[@class='selected-value']")).getText();
	   Assert.assertEquals(comparar, encontrar);
	}

	@Quando("^selecionar New York$")
	public void selecionar_New_York() throws Throwable {
	   
		driver.findElement(By.xpath("//option[@value='New York']")).click();
		
	}

	@Quando("^clicar em First Selected$")
	public void clicar_em_First_Selected() throws Throwable {
	   
		driver.findElement(By.xpath("//button[@id='printMe']")).click();
		
	}

	@Entao("^deverá ser apresentada a mensagem First selected option is : New York$")
	public void deverá_ser_apresentada_a_mensagem_First_selected_option_is_New_York() throws Throwable {
	   
		   String comparar = "First selected option is : New York";
		   String encontrar = driver.findElement(By.xpath("//p[@class='getall-selected']")).getText();
		   Assert.assertEquals(comparar, encontrar);
		
	}

	@Quando("^selecionar California, Ohio e Texas$")
	public void selecionar_California_Ohio_e_Texas() throws Throwable {
		Actions action = new Actions(driver);
		
        WebElement california 	= driver.findElement(By.xpath("//option[@value='California']"));
        WebElement ohio			= driver.findElement(By.xpath("//option[@value='Ohio']"));
        WebElement texas 		= driver.findElement(By.xpath("//option[@value='Texas']"));
        
        action.keyDown(Keys.CONTROL).click(california).click(ohio).click(texas).build().perform();
        
	}

	@Quando("^clicar em Get All Selected$")
	public void clicar_em_Get_All_Selected() throws Throwable {

		driver.findElement(By.xpath("//button[@id='printAll']")).click();
		
	    
	}

	@Entao("^deverá ser apresentada a mensagem Options selected are : California,Ohio,Texas$")
	public void deverá_ser_apresentada_a_mensagem_Options_selected_are_California_Ohio_Texas() throws Throwable {
	   
		   String comparar = "Options selected are : California,Ohio,Texas";
		   String encontrar = driver.findElement(By.xpath("//p[@class='getall-selected']")).getText();
		   Assert.assertEquals(comparar, encontrar);
		   
	}
	
}
