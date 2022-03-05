describe('login', () => {
  beforeEach(() => {
    cy.visit('https://app.deel.training/login')
    cy.get('[name=email]').type('contato@comofazer.site')
    cy.get('[name=password]').type('!L!4SpbxjgNzN6y')
    cy.get('button[type=submit]').click({force: true})
  })

  it('create contract', () => {
    cy.get("button[data-qa='view-my-contracts']").click()
    cy.get("button[data-qa='create-contract']").click()
    cy.xpath("//h4[text()='Fixed Rate']").click()

    //Contract name
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const contractname = `Contract ${id}`
    cy.get("input[name='name']").type(contractname)

    //Contractor's tax residence
    cy.xpath("//div[contains(@data-qa,'contractor-tax-residence') and contains(@class,'deel-ui__select__input-container')]").click()
    cy.contains("Brazil").click({force: true})

    //Contractor's State
    cy.xpath("//div[contains(@data-qa,'contractor-tax-residence') and contains(@class,'deel-ui__select__input-container')]/label[contains(text(),'state')]//following-sibling::div").click({force: true})
    cy.contains("Rio de Janeiro").click({force: true})

    //Job title
    cy.get("input[name='jobTitle']").type('QA')

    //Seniority Level
    cy.xpath("//div[(@class='deel-ui__select__input-container')]/label[contains(text(),'Seniority')]//following-sibling::div").click({force: true})
    cy.contains("Vice President").click({force: true})

    //Scope of work
    cy.get("textarea[name='scope']").type('an information')

    //Next Button
    cy.get('button[type=submit]').click({force: true})
  })
})
