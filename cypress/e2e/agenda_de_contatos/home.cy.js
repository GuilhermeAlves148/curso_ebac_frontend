/// <reference types="cypress" />

describe('Testes para a agenda de contatos.', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })
    it('Deve preencher o formulário de contato.', () => {
        cy.get('input[placeholder="Nome"').type('Guilherme Alves')
        cy.get('input[placeholder="E-mail"').type('alvesguilherme148117@gmail.com')
        cy.get('input[placeholder="Telefone"').type('51123456789')
        cy.get('.adicionar').click()

        cy.screenshot('Teste realizado com sucesso.')
    })

    it('Deve modificar um contato.', () => {
        cy.get('.edit').first().click()
        cy.get('input[placeholder="Nome"').clear('Guilherme Alves')
        cy.get('input[placeholder="Nome"').type('José Francisco')
        cy.get('input[placeholder="E-mail"').clear('alvesguilherme148117@gmail.com')
        cy.get('input[placeholder="E-mail"').type('josefrancisco@gmail.com')
        cy.get('input[placeholder="Telefone"').clear('51123456789')
        cy.get('input[placeholder="Telefone"').type('51987654321')
        cy.get('.alterar').click()

        cy.screenshot('Contato modificado com sucesso.')
    })

    it('Deve remover um contato.', () => {
        cy.get('.delete').last().click()

        cy.screenshot('Contato removido com sucesso.')
    })
})