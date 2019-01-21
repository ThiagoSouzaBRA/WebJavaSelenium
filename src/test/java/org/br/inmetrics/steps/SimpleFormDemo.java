package org.br.inmetrics.steps;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class SimpleFormDemo {

	@Dado("^que estou na pagina Simple Form Demo$")
	public void queEstouNaPaginaSimpleFormDemo() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Quando("^preencher o campo Enter Message com a mensagem ?Treinamento Inmetrics?$")
	public void preencherOCampoEnterMessageComAMensagemTreinamentoInmetrics() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Quando("^clicar em Show Message$")
	public void clicarEmShowMessage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Entao("^devera ser apresentada a mensagem Your Message: Treinamento Inmetrics$")
	public void deveraSerApresentadaAMensagemYourMessageTreinamentoInmetrics() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Quando("^preencher o campo A com ?(\\d+)? e o campo B com ?(\\d+)?$")
	public void preencherOCampoAComEOCampoBCom(int arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Quando("^clicar em Get Total$")
	public void clicarEmGetTotal() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Entao("^devera ser apresentada a mensagem Total a \\+ b = (\\d+)$")
	public void deveraSerApresentadaAMensagemTotalAB(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	
}
