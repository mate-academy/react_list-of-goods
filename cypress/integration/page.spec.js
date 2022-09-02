const page = {
  startButton: () => cy.contains('button', 'Start'),
  sortAlphButton: () => cy.contains('button', 'Sort alphabetically'),
  sortByLengthButton: () => cy.contains('button', 'Sort by length'),
  reverseButton: () => cy.contains('button', 'Reverse'),
  resetButton: () => cy.contains('button', 'Reset'),
  goodsList: () => cy.get('.Goods'),
  goodAtIndex: (index) => cy.get('.Goods__item').eq(index),

  assertFirstGoods: (first, second, third) => {
    page.goodAtIndex(0).should('have.text', first);
    page.goodAtIndex(1).should('have.text', second);
    page.goodAtIndex(2).should('have.text', third);
  }
};

let failed = false;

Cypress.on('fail', (e) => {
  failed = true;
  throw e;
});

describe('Page', () => {
  beforeEach(() => {
    if (failed) Cypress.runner.stop();

    cy.visit('/');
  });

  it(`should show the 'Start' button`, () => {
    page.startButton().should('exist');
  });

  it('should not show the goods', () => {
    page.goodsList().should('not.exist');
  });

  it('should not show other buttons', () => {
    page.reverseButton().should('not.exist');
    page.sortAlphButton().should('not.exist');
    page.resetButton().should('not.exist');
    page.sortByLengthButton().should('not.exist');
  });

  it(`should hide the 'Start' button after click`, () => {
    page.startButton().click();

    page.startButton().should('not.exist');
  });

  it(`should show the goods after the 'Start' button click`, () => {
    page.startButton().click();

    page.goodsList().should('exist');
  });

  it(`should show other buttons after the 'Start' button click`, () => {
    page.startButton().click();

    page.reverseButton().should('exist');
    page.sortAlphButton().should('exist');
    page.resetButton().should('exist');
    page.sortByLengthButton().should('exist');
  });
});

describe('Goods List', () => {
  beforeEach(() => {
    cy.visit('/');
    page.startButton().click();
  });

  it('should show goods in the initial order', () => {
    page.assertFirstGoods('Dumplings', 'Carrot', 'Eggs');
  });

  it(`should sort goods alphabetically`, () => {
    page.sortAlphButton().click();

    page.assertFirstGoods('Apple', 'Bread', 'Carrot');
  });

  it(`should sort goods by length`, () => {
    page.sortByLengthButton().click();

    page.assertFirstGoods('Jam', 'Eggs', 'Fish');
  });

  it(`should reverse goods`, () => {
    page.reverseButton().click();

    page.assertFirstGoods('Garlic', 'Jam', 'Honey');
  });

  it(`should show goods in the original order after two reverses`, () => {
    page.reverseButton().click();
    page.reverseButton().click();

    page.assertFirstGoods('Dumplings', 'Carrot', 'Eggs');
  });

  it(`should reverse goods sorted alphabetically`, () => {
    page.sortAlphButton().click();
    page.reverseButton().click();

    page.assertFirstGoods('Jam', 'Ice cream', 'Honey');
  });

  it(`should show goods sorted alphabetically after double reverse`, () => {
    page.sortAlphButton().click();
    page.reverseButton().click();
    page.reverseButton().click();

    page.assertFirstGoods('Apple', 'Bread', 'Carrot');
  });

  it(`should reverse goods sorted by length`, () => {
    page.sortByLengthButton().click();
    page.reverseButton().click();

    page.assertFirstGoods('Ice cream', 'Dumplings', 'Garlic');
  });

  it(`should show goods sorted by length after double reverse`, () => {
    page.sortByLengthButton().click();
    page.reverseButton().click();
    page.reverseButton().click();

    page.assertFirstGoods('Jam', 'Eggs', 'Fish');
  });

  it(`should reset order after reversing`, () => {
    page.reverseButton().click();
    page.resetButton().click();

    page.assertFirstGoods('Dumplings', 'Carrot', 'Eggs');
  });

  it(`should reset order after sorting alphabetically`, () => {
    page.sortAlphButton().click();
    page.resetButton().click();

    page.assertFirstGoods('Dumplings', 'Carrot', 'Eggs');
  });

  it(`should reset order after sorting alphabetically and reversing`, () => {
    page.sortAlphButton().click();
    page.reverseButton().click();
    page.resetButton().click();

    page.assertFirstGoods('Dumplings', 'Carrot', 'Eggs');
  });

  it(`should reset order after sorting by length`, () => {
    page.sortAlphButton().click();
    page.resetButton().click();

    page.assertFirstGoods('Dumplings', 'Carrot', 'Eggs');
  });

  it(`should reset order after sorting by length and reversing`, () => {
    page.sortAlphButton().click();
    page.reverseButton().click();
    page.resetButton().click();

    page.assertFirstGoods('Dumplings', 'Carrot', 'Eggs');
  });
});
