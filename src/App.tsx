/* eslint-disable no-sequences */
import React from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
import './App.scss';
import { GoodList } from './Components/GoodList/GoodList';

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

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort();
      break;
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
    default:
      break;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
  hiddenReset: boolean,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: true,
    sortType: SortType.NONE,
    hiddenReset: false,
  };

  SortAlphabetically = () => {
    this.setState({
      sortType: SortType.ALPHABET,
      hiddenReset: true,
    });
  };

  SortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
      hiddenReset: true,
    });
  };

  reset = () => {
    this.setState(state => ({
      isReversed: true,
      sortType: SortType.NONE,
      hiddenReset: !state.hiddenReset,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      hiddenReset: true,
    }));
  };

  render() {
    const {
      isReversed,
      sortType,
      hiddenReset,
    } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info',
              { 'is-light': sortType !== SortType.ALPHABET })}
            onClick={this.SortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-success',
              { 'is-light': sortType !== SortType.LENGTH })}
            onClick={this.SortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-warning',
              { 'is-light': isReversed })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {hiddenReset && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          )}

        </div>

        <ul>
          <GoodList goods={getReorderedGoods(goodsFromServer,
            { sortType, isReversed })}
          />
        </ul>
      </div>
    );
  }
}
