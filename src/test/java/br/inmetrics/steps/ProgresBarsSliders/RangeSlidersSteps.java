package br.inmetrics.steps.ProgresBarsSliders;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class RangeSlidersSteps {
	
	WebDriver driver;
	
	@Dado("^que estou na pagina Range Sliders$")
	public void que_estou_na_pagina_Range_Sliders() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\chromedriver\\chromedriver.exe");
    	driver = new ChromeDriver();
    	driver.get("https://www.seleniumeasy.com/test/drag-drop-range-sliders-demo.html");
    	driver.manage().window().maximize();
	}

	@Quando("^mover barra da RangeSliderCinza$")
	public void mover_barra_da_RangeSliderCinza() throws Throwable {
		WebElement mover = driver.findElement(By.xpath("//*[@id=\"slider1\"]/div/input"));
        Actions action = new Actions(driver);
        action.clickAndHold (mover);
        action.moveByOffset(130,0).release().build().perform();
	}

	@Entao("^verificar se valor da RangeSliderCinza foi alterado$")
	public void verificar_se_valor_da_RangeSliderCinza_foi_alterado() throws Throwable {
		String cinza = driver.findElement(By.id("range")).getText();
	    Assert.assertEquals("100", cinza);
	}

	@Quando("^mover barra da RangeSliderVerde$")
	public void mover_barra_da_RangeSliderVerde() throws Throwable {
		WebElement mover = driver.findElement(By.xpath("//*[@id=\"slider3\"]/div/input"));
        Actions action = new Actions(driver);
        action.clickAndHold (mover);
        action.moveByOffset(130,0).release().build().perform();
	}

	@Entao("^verificar se valor da RangeSliderVerde foi alterado$")
	public void verificar_se_valor_da_RangeSliderVerde_foi_alterado() throws Throwable {
		String verde = driver.findElement(By.id("rangeSuccess")).getText();
	    Assert.assertEquals("100", verde);
	}

	@Quando("^mover barra da RangeSliderLaranja$")
	public void mover_barra_da_RangeSliderLaranja() throws Throwable {
		WebElement mover = driver.findElement(By.xpath("//*[@id=\"slider5\"]/div/input"));
        Actions action = new Actions(driver);
        action.clickAndHold (mover);
        action.moveByOffset(130,0).release().build().perform();
	}

	@Entao("^verificar se valor da RangeSliderLaranja foi alterado$")
	public void verificar_se_valor_da_RangeSliderLaranja_foi_alterado() throws Throwable {
		String laranja = driver.findElement(By.id("rangeWarning")).getText();
	    Assert.assertEquals("100", laranja);	
	}

}
