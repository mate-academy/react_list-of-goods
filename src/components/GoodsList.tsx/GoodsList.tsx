import React from 'react';
import './GoodsList.scss';

const goodsFromServer: string[] = [
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

interface State {
  goods: string[],
  isReversed: boolean,
  isAlphabetSort: boolean,
  isLengthSort: boolean,
}

export class GoodsList extends React.PureComponent<{}, State> {
  state = {
    goods: goodsFromServer,
    isReversed: false,
    isAlphabetSort: false,
    isLengthSort: false,
  };

  reverseSort = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  alphabetSort = () => {
    this.setState(state => ({
      isAlphabetSort: !state.isAlphabetSort,
    }));
  };

  lengthSort = () => {
    this.setState(state => ({
      isLengthSort: !state.isLengthSort,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      isAlphabetSort: false,
      isLengthSort: false,
    });
  };

  render() {
    const {
      goods,
      isReversed,
      isAlphabetSort,
      isLengthSort,
    } = this.state;

    const goodsCopy = [...goods];

    if (isReversed) {
      goodsCopy.reverse();
    }

    if (isAlphabetSort) {
      goodsCopy.sort((a, b) => a.localeCompare(b));
    }

    if (isLengthSort) {
      goodsCopy.sort((a, b) => a.length - b.length);
    }

    return (
      <div className="goodsMenu">
        <div className="goodsMenu__buttons">
          <button
            type="button"
            onClick={this.reverseSort}
            className="goodsMenu__button goodsMenu__button--reverseSort"
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={this.alphabetSort}
            className="goodsMenu__button goodsMenu__button--alphabetSort"
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={this.lengthSort}
            className="goodsMenu__button goodsMenu__button--lengthSort"
          >
            Sort by length
          </button>
          <button
            type="button"
            onClick={this.reset}
            className="goodsMenu__button goodsMenu__button--resetSort"
          >
            Reset sort
          </button>
        </div>
        <ul className="goodsMenu__list">
          {goodsCopy.map(good => (
            <li key={good} className="goodsMenu__item">
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
