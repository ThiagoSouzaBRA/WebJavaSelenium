package br.inmetrics.steps.table;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import junit.framework.Assert;

public class TableDataSearchSteps {
	
	WebDriver driver;
	
	@Dado("^que estou na página Table Data Search$")
	public void queEstouNaPáginaTableDataSearch() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\ChromeDriver\\chromedriver.exe"); //Localização do driver
		driver = new ChromeDriver(); //Instancia WebDriver
		driver.get("https://www.seleniumeasy.com/test/table-search-filter-demo.html"); //Iniciar navegador no link X
				
		Assert.assertTrue(driver.findElement(By.xpath("//h3[text()='Tasks']")).isDisplayed());
	}

	@Quando("^pesquisar por \"([^\"]*)\"$")
	public void pesquisarPor(String arg1) throws Throwable {
	    driver.findElement(By.id("task-table-filter")).sendKeys(arg1);
	}

	@Então("^a tebela deverá exibir apenas a Task \"([^\"]*)\"$")
	public void aTebelaDeveráExibirApenasATask(String arg1) throws Throwable {
	    Assert.assertTrue(driver.findElement(By.xpath("//tbody/tr/td[text()='"+ arg1 +"']")).isDisplayed());
	    
	    Thread.currentThread().sleep(5000);
		driver.quit();
	}
	
	@Quando("^clicar no botão filter$")
	public void clicarNoBotãoFilter() throws Throwable {
	    driver.findElement(By.xpath("//button[text()=' Filter']")).click();
	}

	@Então("^verificar se os campos \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" estão ativados$")
	public void verificarSeOsCamposEstãoAtivados(String numero, String username, String firstName, String lastName) throws Throwable {
		Assert.assertTrue(driver.findElement(By.xpath("//thead/tr/th/input[@placeholder='"+ numero +"']")).isEnabled());
	    Assert.assertTrue(driver.findElement(By.xpath("//thead/tr/th/input[@placeholder='"+ username +"']")).isEnabled());
	    Assert.assertTrue(driver.findElement(By.xpath("//thead/tr/th/input[@placeholder='"+ firstName +"']")).isEnabled());
	    Assert.assertTrue(driver.findElement(By.xpath("//thead/tr/th/input[@placeholder='"+ lastName +"']")).isEnabled());
	    
	    Thread.currentThread().sleep(5000);
		driver.quit();
	}
	
	@Quando("^pesquisar pelo username \"([^\"]*)\"$")
	public void pesquisarPeloUsername(String arg1) throws Throwable {
	    driver.findElement(By.xpath("//thead/tr/th/input[@placeholder='Username']")).sendKeys(arg1);
	}

	@Então("^a tabela deverá exibir apenas o usuário \"([^\"]*)\"$")
	public void aTabelaDeveráExibirApenasOUsuário(String arg1) throws Throwable {
	    Assert.assertTrue(driver.findElement(By.xpath("//tbody/tr/td[text()='"+ arg1 +"']")).isDisplayed());
	    
	    Thread.currentThread().sleep(5000);
		driver.quit();
	}
}
