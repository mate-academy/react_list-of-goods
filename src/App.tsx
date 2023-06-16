/* eslint-disable no-console */
import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

export class App extends React.Component {
  goods = [...goodsFromServer];

  state = {
    isReversed: false,
    sortType: 0,
  };

  buttonClickReverse = (): void => {
    this.goods = this.goods.reverse();
    this.setState(prevState => (
      { ...prevState, isReversed: !prevState.isReversed }));
  };

  buttonClickAbc = (): void => {
    this.goods = [...this.goods.sort((a, b) => a.localeCompare(b))];
    this.setState(prevState => ({ ...prevState, sortType: SortType.ALPHABET }));
  };

  buttonClickLength = (): void => {
    this.goods = [...this.goods.sort((a, b) => a.length - b.length)];
    this.setState(prevState => ({ ...prevState, sortType: SortType.LENGTH }));
  };

  buttonClickReset = (): void => {
    this.goods = [...goodsFromServer];
    this.setState(prevState => (
      { ...prevState, isReversed: false, sortType: SortType.NONE }));
  };

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            id="SortByAbc"
            className={`button is-info ${(this.state.sortType === 1 ? '' : 'is-light')}`}
            onClick={this.buttonClickAbc}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            id="SortByLength"
            className={`button is-success ${(this.state.sortType === 2 ? '' : 'is-light')}`}
            onClick={this.buttonClickLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            id="reverse"
            onClick={this.buttonClickReverse}
            className={`button is-warning ${(this.state.isReversed ? '' : 'is-light')}`}
          >
            Reverse
          </button>

          {(this.state.isReversed || this.state.sortType !== 0)
          && (
            <button
              type="button"
              id="reset"
              className="button is-danger is-light"
              onClick={this.buttonClickReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {this.goods.map(productName => (
              <li data-cy="Good" key={productName}>{productName}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
