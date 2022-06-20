import React from 'react';
import './App.css';
import { GoodsList } from './components/goodsList/goodsList';

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
  alphabetically = 'alphabetically',
  byLength = 'byLength',
}

type State = {
  isListVisible: boolean;
  isReversed: boolean;
  sortBy: SortBy | null;
};

class App extends React.Component<{}, State> {
  state: State = {
    isListVisible: false,
    isReversed: false,
    sortBy: null,
  };

  showList = () => this.setState({ isListVisible: true });

  reverseList = () => this.setState(prevState => ({
    ...prevState,
    isReversed: !prevState.isReversed,
  }));

  sortList = (sortOption: SortBy) => (
    this.setState({ sortBy: sortOption })
  );

  resetList = () => this.setState({
    isReversed: false,
    sortBy: null,
  });

  render() {
    const goodsCopy = [...goodsFromServer];
    const {
      isListVisible,
      isReversed,
      sortBy,
    } = this.state;

    switch (sortBy) {
      case SortBy.alphabetically:
        goodsCopy.sort();
        break;
      case SortBy.byLength:
        goodsCopy.sort((itemA, itemB) => itemA.length - itemB.length);
        break;
      default:
        break;
    }

    if (isReversed) {
      goodsCopy.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {goodsFromServer.length}

        <div className="buttons">
          <button
            type="button"
            onClick={() => this.reverseList()}
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={() => this.sortList(SortBy.alphabetically)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={() => this.sortList(SortBy.byLength)}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={() => this.resetList()}
          >
            Reset
          </button>
        </div>

        {isListVisible
          ? <GoodsList goods={goodsCopy} />
          : (
            <button
              type="button"
              onClick={() => this.showList()}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
