const buttons = {
  start: 'Start',
  reverse: 'Reverse',
  sortAlph: 'Sort alphabetically',
  reset: 'Reset',
  sortByLength: 'Sort by length',
}

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic'
];

Cypress.Commands.add('getButton', (text) => {
  cy.contains('button', text);
});

Cypress.Commands.add('checkGoodsList', (items) => {
  cy.get('li').each((li, index) => {
    cy.wrap(li)
      .should('contain', items[index]);
  });
});

describe('Page', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.getButton(buttons.start).click();
  });
  
  it(`should hide 'Start' button after start`, () => {
    cy.getButton(buttons.start).should('not.exist');
  });

  it(`should show the goods in the initial order after clicking on 'Start'`, () => {
    cy.get('li').should('have.length', goodsFromServer.length);
  });

  it(`should show reversed goods after clicking on 'Reverse'`, () => {
    const reverseListOfGoods = [
      'Garlic',
      'Jam',
      'Honey',
      'Fish',
      'Bread',
      'Apple',
      'Ice cream',
      'Eggs',
      'Carrot',
      'Dumplings'
    ];

    cy.getButton(buttons.reverse).click();

    cy.checkGoodsList(reverseListOfGoods);
  });

  it(`should show the goods sorted alphabetically after clicking on 'Sort alphabetically'`, () => {
    const sortedAlphabeticallyGoods = [
      'Apple',
      'Bread',
      'Carrot',
      'Dumplings',
      'Eggs',
      'Fish',
      'Garlic',
      'Honey',
      'Ice cream',
      'Jam'
    ];

    cy.getButton(buttons.sortAlph).click();

    cy.checkGoodsList(sortedAlphabeticallyGoods);
  });

  it(`should show the goods sorted by length after clicking on 'Sort by length'`, () => {
    const sortedByLengthGoods = [
      'Jam',
      'Eggs',
      'Fish',
      'Apple',
      'Bread',
      'Honey',
      'Carrot',
      'Garlic',
      'Dumplings',
      'Ice cream'
    ];

    cy.getButton(buttons.sortByLength).click();

    cy.checkGoodsList(sortedByLengthGoods);
  });

  it(`should show the goods in the initial order after clicking on 'Reset'`, () => {
    cy.getButton(buttons.sortByLength).click();

    cy.getButton(buttons.sortAlph).click();

    cy.getButton(buttons.reset).click();

    cy.checkGoodsList(goodsFromServer);
  });
});