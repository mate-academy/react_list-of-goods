import React from 'react';
import './App.css';
import { ListOfGoods } from './components/ListOfGoods/ListOfGoods';

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

type State = {
  goods: string[],
  isVisibleList: boolean,
  sortBy: string,
  isReversedList: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isVisibleList: false,
    sortBy: '',
    isReversedList: false,
  };

  start = () => {
    this.setState({
      isVisibleList: true,
    });
  };

  reverseOfGoods = () => {
    this.setState(state => ({
      isReversedList: !state.isReversedList,
    }));
  };

  sortAbc = () => {
    this.setState({
      sortBy: 'abc',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  resetOfList = () => {
    this.setState({
      sortBy: '',
      isReversedList: false,
    });
  };

  prepareGoods = () => {
    const { goods, sortBy, isReversedList } = this.state;
    const copyOfList = [...goods];

    copyOfList.sort((firstGood, secondGood) => {
      switch (sortBy) {
        case 'abc':
          return firstGood.localeCompare(secondGood);
        case 'length':
          return firstGood.length - secondGood.length;
        default:
          return 0;
      }
    });

    if (isReversedList) {
      copyOfList.reverse();
    }

    return copyOfList;
  };

  render() {
    const { isVisibleList } = this.state;
    const preparedGoods = this.prepareGoods();

    return (
      <div className="App">
        {!isVisibleList && (
          <button
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
                type="button"
                onClick={this.reverseOfGoods}
              >
                Reverse of goods
              </button>

              <button
                type="button"
                onClick={this.sortAbc}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={this.resetOfList}
              >
                Reset
              </button>
            </div>
            <ListOfGoods goodsList={preparedGoods} />
          </>
        )}
      </div>
    );
  }
}

export default App;
