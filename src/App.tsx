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
  sortBy: number
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortBy: 0,
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
      this.setState({ sortBy: 1 });
    };

    const sortedLength = () => {
      this.setState({ sortBy: 2 });
    };

    const reset = () => {
      this.setState({
        isReversed: false,
        sortBy: 0,
      });
    };

    if (this.state.sortBy === 1) {
      visibleGoods.sort();
    }

    if (this.state.sortBy === 2) {
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
            onClick={() => {
              sortedAlphabetically();
            }}
            type="button"
            className={classNames(
              'button is-info',
              {
                'button is-info is-light': this.state.sortBy === 1,
              },
            )}
          >
            Sort alphabetically
          </button>

          <button
            onClick={() => {
              sortedLength();
            }}
            type="button"
            className={classNames(
              'button is-success',
              {
                'button is-success is-light': this.state.sortBy === 1,
              },
            )}
          >
            Sort by length
          </button>

          <button
            onClick={() => {
              reverse();
            }}
            type="button"
            className={classNames(
              'button is-warning',
              {
                'button is-warning is-light': this.state.isReversed === true,
              },
            )}
          >
            Reverse
          </button>

          {
            (this.state.sortBy > 0 || this.state.isReversed === true)
              ? (
                <button
                  onClick={() => {
                    reset();
                  }}
                  type="button"
                  className="button is-danger is-light"
                >
                  Reset
                </button>
              )
              : ('')
          }
        </div>

        <ul>
          {visibleGoods.map(good => <li data-cy="Good">{good}</li>)}
        </ul>
      </div>
    );
  }
}
