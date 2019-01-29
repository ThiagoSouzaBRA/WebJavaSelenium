package br.inmetrics.steps.bootstrap;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import junit.framework.Assert;

public class BootstrapProgressBar {

	WebDriver driver;
	
	@Dado("^que estou na página Bootstrap Progress Bar$")
	public void queEstouNaPáginaBootstrapProgressBar() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\ChromeDriver\\chromedriver.exe"); //Localização do driver
		driver = new ChromeDriver(); //Instancia WebDriver
		driver.get("https://www.seleniumeasy.com/test/bootstrap-download-progress-demo.html"); //Iniciar navegador no link X
		
		Assert.assertTrue(driver.findElement(By.xpath("//div[text()='Progress Bar for Download']")).isDisplayed());
	}

	@Quando("^clicar no botão Download$")
	public void clicarNoBotãoDownload() throws Throwable {
	    driver.findElement(By.id("cricle-btn")).click();
	}

	@Então("^verificar se o progresso do download atinge \"([^\"]*)\"$")
	public void verificarSeOProgressoDoDownloadAtinge(String arg1) throws Throwable {
		String xPorc = driver.findElement(By.xpath("//div[@class='percenttext']")).getText();
		xPorc = xPorc.substring(0, xPorc.indexOf("%"));
	    int x = Integer.parseInt(xPorc);
	    while(x<=100) {
	    	if(x==100) {
	    		Assert.assertEquals(arg1, driver.findElement(By.xpath("//div[@class='percenttext']")).getText());
	    		break;
	    	}
	    	xPorc = driver.findElement(By.xpath("//div[@class='percenttext']")).getText();
			xPorc = xPorc.substring(0, xPorc.indexOf("%"));
	    	x = Integer.parseInt(xPorc);
	    }
	}
}
