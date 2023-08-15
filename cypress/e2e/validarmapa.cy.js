/// <reference types="cypress" />


describe ('inicial', ()=> {
    //Acessando a pagina Home do site VR - coloquei a BaseUrl no arquivo (cypress.json)
    it ('ACESSANDO PAGINA VR E VERIFICANDO SE O MAPA ESTA VISIVEL', ()=> {
        cy.visit('/')
        //Aceitando os Termos de Privacidade da pagina
        cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm').click()
        //Acessando menu SOU TRABALHADOR
        cy.get(':nth-child(3) > .vr-main-navigation__link').click()
        //Fazendo Scroll ate a localização do mapa
        cy.contains('Rede credenciada').scrollIntoView()
        //Verificando se o mapa esta visivel
        cy.get('#map').should('be.visible').wait(4000);
    })
});