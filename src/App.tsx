import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Good } from './types';
import { ListOfGoods } from './components/GoodsList/GoodsList';

import './App.css';

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
].map(good => ({ name: good, id: uuidv4() }));

enum SortBy {
  none,
  alphabet,
  length,
}

type State = {
  isVisibleList: boolean;
  isReversedList: boolean;
  sortBy: SortBy;
};

class App extends React.Component<{}, State> {
  state: State = {
    isVisibleList: false,
    isReversedList: false,
    sortBy: SortBy.none,
  };

  start = () => {
    this.setState({
      isVisibleList: true,
    });
  };

  reverseList = () => {
    this.setState(state => ({
      isReversedList: !state.isReversedList,
    }));
  };

  sortBy = (newSortBy: SortBy) => {
    this.setState({
      sortBy: newSortBy,
    });
  };

  resetOfList = () => {
    this.setState({
      sortBy: SortBy.none,
      isReversedList: false,
    });
  };

  render() {
    const { isVisibleList, sortBy, isReversedList } = this.state;
    const preparedGoods = [...goodsFromServer];

    preparedGoods.sort((firstGood, secondGood) => {
      switch (sortBy) {
        case SortBy.alphabet:
          return firstGood.name.localeCompare(secondGood.name);
        case SortBy.length:
          return firstGood.name.length - secondGood.name.length;
        default:
          return 0;
      }
    });

    if (isReversedList) {
      preparedGoods.reverse();
    }

    return (
      <div className="App">
        <h1>List of Goods</h1>
        {!isVisibleList && (
          <button
            className="button"
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {isVisibleList && (
          <>
            <div className="manipulation buttons">
              <button
                className="manipulation buttons__button"
                type="button"
                onClick={this.reverseList}
              >
                Reverse
              </button>

              <button
                className="manipulation buttons__button"
                type="button"
                onClick={() => this.sortBy(SortBy.alphabet)}
              >
                Sort alphabetically
              </button>

              <button
                className="manipulation buttons__button"
                type="button"
                onClick={() => this.sortBy(SortBy.length)}
              >
                Sort by length
              </button>

              <button
                className="manipulation buttons__button"
                type="button"
                onClick={this.resetOfList}
              >
                Reset
              </button>
            </div>

            {isVisibleList && (
              <ListOfGoods goods={preparedGoods} />
            )}
          </>
        )}
      </div>
    );
  }
}

export default App;
