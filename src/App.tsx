import React from 'react';
import { v4 as getId } from 'uuid';
import { Good } from './types/Good';
import { GoodsList } from './components';
import './App.scss';

const goodsFromServer: Good[] = [
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
].map(good => ({ name: good, id: getId() }));

enum SortBy {
  None,
  Alphabet,
  Length,
}

type State = {
  isVisibleList: boolean;
  isReversed: boolean;
  sortBy: SortBy;
};

class App extends React.Component<{}, State> {
  state: State = {
    isVisibleList: false,
    isReversed: false,
    sortBy: SortBy.None,
  };

  start = () => {
    this.setState({
      isVisibleList: true,
    });
  };

  reverseList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortBy = (newSortBy: SortBy) => {
    this.setState({
      sortBy: newSortBy,
    });
  };

  resetOfList = () => {
    this.setState({
      sortBy: SortBy.None,
      isReversed: false,
    });
  };

  render() {
    const { isVisibleList, sortBy, isReversed } = this.state;
    const copyOfGoods = [...goodsFromServer];

    copyOfGoods.sort((prevGood, nextGood) => {
      switch (sortBy) {
        case SortBy.Alphabet:
          return prevGood.name.localeCompare(nextGood.name);
        case SortBy.Length:
          return prevGood.name.length - nextGood.name.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      copyOfGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="App__title">List of Goods</h1>
        {!isVisibleList && (
          <button
            className="App__button"
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {isVisibleList && (
          <>
            <div>
              <button
                className="App__button"
                type="button"
                onClick={this.reverseList}
              >
                Reverse
              </button>

              <button
                className="App__button"
                type="button"
                onClick={() => this.sortBy(SortBy.Alphabet)}
              >
                Sort alphabetically
              </button>

              <button
                className="App__button"
                type="button"
                onClick={() => this.sortBy(SortBy.Length)}
              >
                Sort by length
              </button>

              <button
                className="App__button"
                type="button"
                onClick={this.resetOfList}
              >
                Reset
              </button>
            </div>

            {isVisibleList && (
              <GoodsList goods={copyOfGoods} />
            )}
          </>
        )}
      </div>
    );
  }
}

export default App;
