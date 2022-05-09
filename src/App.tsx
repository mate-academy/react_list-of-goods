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

type State = {
  goods: Good[];
  isVisibleList: boolean;
  isReversedList: boolean;
  sortBy: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isVisibleList: false,
    isReversedList: false,
    sortBy: '',
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

  sortByAbc = () => {
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

  prepareGoodsList = () => {
    const { goods, sortBy, isReversedList } = this.state;
    const copyOfList = [...goods];

    copyOfList.sort((firstGood, secondGood) => {
      switch (sortBy) {
        case 'abc':
          return firstGood.name.localeCompare(secondGood.name);
        case 'length':
          return firstGood.name.length - secondGood.name.length;
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
    const preparedList = this.prepareGoodsList();

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
                onClick={this.sortByAbc}
              >
                Sort alphabetically
              </button>
              <button
                className="manipulation buttons__button"
                type="button"
                onClick={this.sortByLength}
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
            <ListOfGoods goodsList={preparedList} />
          </>
        )}
      </div>
    );
  }
}

export default App;
