import classNames from 'classnames';
import React from 'react';
import './App.scss';
import GoodsList from './components/GoodsList';

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

enum SortBy {
  none,
  alphabet,
  length,
}

type State = {
  isVisible: boolean,
  isReversed: boolean,
  sortBy: SortBy,
};

type Props = {};

class App extends React.Component<Props, State> {
  state = {
    isVisible: false,
    isReversed: false,
    sortBy: SortBy.none,
  };

  changeVisible = () => {
    this.setState((state) => ({ isVisible: !state.isVisible }));
  };

  changeReverse = () => {
    this.setState((state) => ({ isReversed: !state.isReversed }));
  };

  changeSortBy = (newSortBy: SortBy) => {
    this.setState({ sortBy: newSortBy });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: SortBy.none,
    });
  };

  render() {
    const { isVisible, isReversed, sortBy } = this.state;

    const preparedGoods = [...goodsFromServer];

    preparedGoods.sort((a, b) => {
      switch (sortBy) {
        case SortBy.alphabet:
          return a.localeCompare(b);

        case SortBy.length:
          return a.length - b.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      preparedGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>

        {!isVisible && (
          <button
            className="button"
            type="button"
            onClick={this.changeVisible}
          >
            Start
          </button>
        )}

        {isVisible && (
          <div className="App__controller">
            <button
              className={classNames('button', {
                'button--active': isReversed,
              })}
              type="button"
              onClick={this.changeReverse}
            >
              Reverse
            </button>

            <button
              className={classNames('button', {
                'button--active': sortBy === SortBy.alphabet,
              })}
              type="button"
              onClick={() => this.changeSortBy(SortBy.alphabet)}
            >
              Sort alphabetically
            </button>

            <button
              className={classNames('button', {
                'button--active': sortBy === SortBy.length,
              })}
              type="button"
              onClick={() => this.changeSortBy(SortBy.length)}
            >
              Sort by length
            </button>

            <button
              className="button"
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
          </div>
        )}

        {isVisible && (
          <GoodsList
            goods={preparedGoods}
            className="App__list"
          />
        )}
      </div>
    );
  }
}

export default App;
