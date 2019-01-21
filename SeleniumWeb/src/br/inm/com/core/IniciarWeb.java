package br.inm.com.core;


import frameworkSelenium.core.apoio.ControleAutomacao;
import frameworkSelenium.core.selenium.controleWeb.componente.ControleWeb;
import frameworkSelenium.core.selenium.controleWeb.componente.Navegador;

public class IniciarWeb {

	public void iniciar(String url) throws Exception{

		ControleWeb.determinarNavegador(Navegador.CHROME);		
		ControleWeb.abrirBrowser(url);		
		ControleAutomacao.gravarLogInfo("Iniciando browser no link... " + url, true);
	}

	public void iniciar() throws Exception{
		ControleWeb.determinarNavegador(Navegador.CHROME);
		ControleWeb.abrirBrowser("https://www.seleniumeasy.com/");
	}

	public void fechar(){
		ControleWeb.fecharBrowser();
	}
}