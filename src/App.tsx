import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classnames from 'classnames';

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
  None,
  Alphabet,
  Length,
}

type State = {
  isReversed: boolean,
  sortType: SortType,
  goods: string[],
};

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isReversed: false,
    sortType: SortType.None,
  };

  render() {
    const visibleGoods = [...this.state.goods];
    const { isReversed, sortType } = this.state;

    visibleGoods.sort((a, b): SortType => {
      switch (sortType) {
        case SortType.Length:
          return a.length - b.length;

        case SortType.Alphabet:
          return a.localeCompare(b);

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    const handleSortAlphabetically = () => {
      this.setState({
        sortType: SortType.Alphabet,
      });
    };

    const handleSortByLength = () => {
      this.setState({
        sortType: SortType.Length,
      });
    };

    const handleReverse = () => {
      this.setState((state) => ({
        isReversed: !state.isReversed,
      }));
    };

    const handleSReset = () => {
      this.setState(() => ({
        sortType: SortType.None,
        isReversed: false,
      }));
    };

    return (
      <>
        <div className="section content">
          <div className="buttons">
            <button
              type="button"
              className={classnames('button', 'is-info',
                this.state.sortType !== SortType.Alphabet && 'is-light')}
              onClick={handleSortAlphabetically}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className={classnames('button', 'is-success',
                this.state.sortType !== SortType.Length && 'is-light')}
              onClick={handleSortByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              className={classnames('button', 'is-warning',
                !this.state.isReversed && 'is-light')}
              onClick={handleReverse}
            >
              Reverse
            </button>

            {
              (this.state.sortType !== SortType.None
                || this.state.isReversed) && (
                <button
                  type="button"
                  className="button is-danger is-light"
                  onClick={handleSReset}
                >
                  Reset
                </button>
              )
            }
          </div>

          <ul>
            <ul>
              {
                visibleGoods.map((good) => (
                  <li data-cy="Good" key={good}>
                    {good}
                  </li>
                ))
              }
            </ul>
          </ul>
        </div>
      </>
    );
  }
}
