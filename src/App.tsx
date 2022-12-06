import React from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

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
  'Garlic',
];

type State = {
  isReversed: boolean,
  sortBy: SortType
};

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortBy: SortType.NONE,
  };

  render() {
    const { isReversed } = this.state;
    const visibleGoods = [...goodsFromServer];

    const reverse = () => {
      this.setState(state => ({
        isReversed: !state.isReversed,
      }));
    };

    const sortedAlphabetically = () => {
      this.setState({ sortBy: SortType.ALPHABET });
    };

    const sortedLength = () => {
      this.setState({ sortBy: SortType.LENGTH });
    };

    const reset = () => {
      this.setState({
        isReversed: false,
        sortBy: SortType.NONE,
      });
    };

    if (this.state.sortBy === SortType.ALPHABET) {
      visibleGoods.sort();
    }

    if (this.state.sortBy === SortType.LENGTH) {
      visibleGoods.sort((good1, good2) => {
        return good1.length - good2.length;
      });
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="section content">
        <div className="buttons">
          <button
            onClick={sortedAlphabetically}
            type="button"
            className={classNames(
              {
                'button is-info is-light':
                  this.state.sortBy !== SortType.ALPHABET,
              },
              {
                'button is-info':
                  this.state.sortBy === SortType.ALPHABET,
              },
            )}
          >
            Sort alphabetically
          </button>

          <button
            onClick={sortedLength}
            type="button"
            className={classNames(
              {
                'button is-success is-light':
                  this.state.sortBy !== SortType.LENGTH,
              },
              {
                'button is-success':
                  this.state.sortBy === SortType.LENGTH,
              },
            )}
          >
            Sort by length
          </button>

          <button
            onClick={reverse}
            type="button"
            className={classNames(
              {
                'button is-warning is-light': this.state.isReversed === false,
              },
              {
                'button is-warning': this.state.isReversed === true,
              },
            )}
          >
            Reverse
          </button>

          {
            (this.state.sortBy !== SortType.NONE
              || this.state.isReversed === true)
              && (
                <button
                  onClick={reset}
                  type="button"
                  className="button is-danger is-light"
                >
                  Reset
                </button>
              )
          }
        </div>

        <ul>
          {visibleGoods.map(good => <li data-cy="Good">{good}</li>)}
        </ul>
      </div>
    );
  }
}
