import { Component } from 'react';
import cn from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

import goodsFromServer from './goodsFromServer';

import {
  SortType,
  State,
  Props,
} from './types';

import { getReorderedGoods } from './functions';

export class App extends Component<Props, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortAlphabetically = () => {
    if (this.state.sortType !== SortType.ALPHABET) {
      this.setState({ sortType: SortType.ALPHABET });
    }
  }

  sortByLength = () => {
    if (this.state.sortType !== SortType.LENGTH) {
      this.setState({ sortType: SortType.LENGTH });
    }
  }

  reverseList = () => {
    this.setState((prevState) => ({ isReversed: !prevState.isReversed }));
  }

  resetList = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  }

  render() {
    const { sortType, isReversed } = this.state;

    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);

    const alphabetIsActive = sortType === SortType.ALPHABET;
    const lengthIsActive = sortType === SortType.LENGTH;

    const alphabetBtnClass = cn('button', 'is-info', {
      'is-light': !alphabetIsActive,
    });

    const lengthBtnClass = cn('button', 'is-success', {
      'is-light': !lengthIsActive,
    });

    const reverseBtnClass = cn('button', 'is-danger', {
      'is-light': !isReversed,
    });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={alphabetBtnClass}
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className={lengthBtnClass}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
          <button
            type="button"
            className={reverseBtnClass}
            // className="button is-warning is-light"
            onClick={this.reverseList}
          >
            Reverse
          </button>
          {
            (sortType !== SortType.NONE || isReversed)
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.resetList}
              >
                Reset
              </button>
            )
          }
        </div>
        <ul>
          <ul>
            {
              visibleGoods.map(item => {
                return (
                  <li key={item} data-cy="Good">{item}</li>
                );
              })
            }
          </ul>
        </ul>
      </div>
    );
  }
}
