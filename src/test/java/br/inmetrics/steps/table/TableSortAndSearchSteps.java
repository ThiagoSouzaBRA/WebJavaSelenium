package br.inmetrics.steps.table;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class TableSortAndSearchSteps {
	
	WebDriver driver;
	
	@Dado("^que estou na página Table Sort And Search$")
	public void que_estou_na_página_Table_Sort_And_Search() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\ChromeDriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.seleniumeasy.com/test/table-sort-search-demo.html");
	    
		if(driver.findElement(By.xpath("//h2[text()='Table Sort And Search Demo']")) == null){
			Assert.assertTrue(false);
		}
	}

	@Quando("^digitar no campo de texto \"([^\"]*)\"$")
	public void digitar_no_campo_de_texto_para_exibir(String arg1) throws Throwable {
	   
		driver.findElement(By.xpath("//input[@type='search']")).sendKeys(arg1);
	    
	}

	@Entao("^deverá ser apresentado \"([^\"]*)\" no campo \"([^\"]*)\"$")
	public void deverá_ser_apresentado_no_campo(String arg1, String arg2) throws Throwable {
	    int c=0;
	    
		switch(arg2){
			case "Name":
				c = 1;
				break;
			case "Position":
				c = 2;
				break;
			case "Office":
				c = 3;
				break;
			case "Age":
				c = 4;
				break;
			case "Start date":
				c = 5;
				break;
			case "Salary":
				c = 6;
				break;
		}
		
		
		
		Assert.assertTrue(driver.findElement(By.xpath("//td[text()='" + arg1 + "'][" + c + "]")) != null);
		
	}

	@Quando("^mudar ordem do campo \"([^\"]*)\"$")
	public void clicar_no_campo_exibir_em_ordem(String arg1) throws Throwable {
	   
		driver.findElement(By.xpath("//th[text()='" + arg1 + "']")).click();
		
	}

	@Entao("^deverá ser apresentado no campo \"([^\"]*)\"$")
	public void deverá_ser_apresentado_nome_em_ordem_decrescente(String arg1) throws Throwable {
		driver.findElement(By.xpath("//th[text()='" + arg1 + "'][//th[@class='sorting_desc']]")).click();
	}

	@Quando("^clicar no campo List$")
	public void clicar_no_campo_List() throws Throwable {
		
		driver.findElement(By.xpath("//*[@id=\"example_length\"]/label/select")).click();
	}

	@Quando("^selecionar \"([^\"]*)\" quantidade$")
	public void selecionar_quantidade(String arg1) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"example_length\"]/label/select")).sendKeys(arg1);
	}

	@Entao("^deverá ser apresentado (\\d+) quantidades$")
	public void deverá_ser_apresentado_quantidades(int arg1) throws Throwable {
	    
		for(int i=1;i >= arg1;i++){

	    	if(driver.findElement(By.xpath("//tr[" + i + "]")) == null){
	    		Assert.assertTrue(false);
	    	}
	    }
	}

}
