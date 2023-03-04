import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { SortType } from './enums/sortType';
import Goods from './components/goods';
import { getReorderedGoods } from './getReorderedGoods';

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

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
  showResetButton: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
    showResetButton: false,
  };

  alphSort = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as Element;

    this.setState({
      sortType: SortType.ALPHABET,
    });
    if (target.classList.contains('is-light')) {
      this.setState({
        showResetButton: true,
      });
    }
  };

  lengthSort = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as Element;

    this.setState({
      sortType: SortType.LENGTH,
    });

    if (target.classList.contains('is-light')) {
      this.setState({
        showResetButton: true,
      });
    }
  };

  reversed = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget as Element;
    const parentEl = target.parentElement as Element;

    const alphButton = parentEl.children[0] as Element;
    const lenghtButton = parentEl.children[1] as Element;

    if (target.classList.contains('is-light')) {
      this.setState({
        showResetButton: true,
      });
    } else if (alphButton.classList.contains('is-light')
        && lenghtButton.classList.contains('is-light')) {
      this.setState({
        showResetButton: false,
      });
    }

    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
      showResetButton: false,
    });
  };

  render() {
    const { sortType, isReversed, showResetButton } = this.state;

    const reorderedGoods = getReorderedGoods(
      goodsFromServer,
      { sortType, isReversed },
    );

    // const removeBut = document.querySelector(".is-danger");
    return (
      <div className="section content">
        <div className="buttons">
          <button
            onClick={this.alphSort}
            type="button"
            className={classNames(
              'button', 'is-info',
              {
                'is-light': sortType !== 'alphabet',
              },
            )}
          >
            Sort alphabetically
          </button>

          <button
            onClick={this.lengthSort}
            type="button"
            className={classNames(
              'button', 'is-success',
              {
                'is-light': sortType !== 'length',
              },
            )}
          >
            Sort by length
          </button>

          <button
            onClick={this.reversed}
            type="button"
            className={classNames(
              'button', 'is-warning',
              {
                'is-light': isReversed !== true,
              },
            )}
          >
            Reverse
          </button>

          {showResetButton
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.reset}
              >
                Reset
              </button>
            )}
        </div>

        <Goods goods={reorderedGoods} />

      </div>
    );
  }
}
