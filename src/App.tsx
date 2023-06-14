import React from 'react';
import cn from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';
import { State } from './Type/State';
import { getReorderedGoods } from './getReorderedGoods';
import { SortType } from './Type/SortType';
import { goodsFromServer } from './goodsFromServer';

export class App extends React.Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  resetList = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render(): React.ReactNode {
    const { isReversed, sortType } = this.state;

    const goods = getReorderedGoods(goodsFromServer, { sortType, isReversed });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            onClick={this.sortByAlphabet}
            className={cn('button is-info',
              { 'is-light': sortType !== SortType.ALPHABET })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortByLength}
            className={cn('button is-success',
              { 'is-light': sortType !== SortType.LENGTH })}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.reverse}
            className={cn('button is-warning',
              { 'is-light': !isReversed })}
          >
            Reverse
          </button>

          {(isReversed
          || sortType !== SortType.NONE)
           && (
             <button
               type="button"
               onClick={this.resetList}
               className="button is-danger is-light"
             >
               Reset
             </button>
           )}

        </div>

        <ul>
          {goods.map(good => (
            <li
              data-cy="Good"
              key={good}
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
